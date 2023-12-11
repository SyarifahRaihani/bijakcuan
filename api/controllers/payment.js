require("dotenv").config()
const express = require("express")
const axios = require("axios")
const midtransClient = require("midtrans-client")

async function pay(req, res) {
	const { order_id, user_id, promo_id, paket, nama, email, total } =
		await req.body

	try {
		let snap = new midtransClient.Snap({
			isProduction: false,
			serverKey: process.env.MIDTRANS_SERVER,
			clientKey: process.env.MIDTRANS_CLIENT,
		})

		let parameter = {
			transaction_details: {
				order_id: order_id,
				gross_amount: total,
			},
			item_details: [
				{
					price: total,
					quantity: 1,
					name: `Bijakcuan Membership ${paket}`,
					category: paket,
					merchant_name: "Bijakcuan.",
					url: "bijakcuan-new.vercel.app",
				},
			],
			customer_details: {
				first_name: nama,
				email: email,
			},
			credit_card: {
				secure: true,
			},
		}

		const payload = {
			order_id,
			total,
		}

		const headers = {
			"Content-Type": "application/json",
			Authorization: `Basic ${Buffer.from(
				`${process.env.MIDTRANS_SERVER}:`
			).toString("base64")}`,
		}

		const response = await axios.post(
			"https://api.midtrans.com/v2/capture",
			payload,
			{ headers }
		)

		console.log(response)

		await query(
			`
		  INSERT INTO orders (id, user_id, promo_id, paket, total)
		  VALUES (?, ?, ?, ?, ?);`,
			[order_id, user_id, promo_id, paket, total]
		)

		snap.createTransaction(parameter).then((transaction) => {
			let transactionToken = transaction.token
			console.log("transactionToken:", transactionToken)
			res.status(200).json({ token: transactionToken })
		})
	} catch (err) {
		console.error(err)
	}
}

module.exports = pay
