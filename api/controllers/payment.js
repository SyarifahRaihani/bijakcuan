require("dotenv").config()
const query = require("../database")
const midtransClient = require("midtrans-client")

async function order(req, res) {
	const { order_id, user_id, promo_id, paket, nama, email, total } =
		await req.body

	if (
		order_id === undefined ||
		user_id === undefined ||
		promo_id === undefined ||
		paket === undefined ||
		nama === undefined ||
		email === undefined ||
		total === undefined
	) {
		return res.status(400).json({ failed: "Data tidak lengkap." })
	}

	try {
		const serverKey = await process.env.MIDTRANS_SERVER
		const clientKey = await process.env.MIDTRANS_CLIENT

		await query(
			`
		  INSERT INTO orders (id, user_id, promo_id, paket, total)
		  VALUES (?, ?, ?, ?, ?);`,
			[order_id, user_id, promo_id, paket, total]
		)

		let snap = new midtransClient.Snap({
			isProduction: false,
			serverKey: serverKey,
			clientKey: clientKey,
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

		snap.createTransaction(parameter).then((transaction) => {
			let transactionToken = transaction.token
			console.log("transactionToken:", transactionToken)
			res.status(200).json({ token: transactionToken })
		})
	} catch (err) {
		console.error(err)
	}
}

async function orderValidation(req, res) {
	const { order_id, status_code, transaction_status } = await req.body

	if (
		order_id === undefined ||
		status_code === undefined ||
		transaction_status === undefined
	) {
		return res.status(400).json({ failed: "Data tidak lengkap." })
	}

	try {
		await query(
			`
		  INSERT INTO orders (status_order)
		  VALUES (?);`,
			[transaction_status]
		)

		const isValid = await query(`SELECT paket FROM orders WHERE id = ?;`, [
			order_id,
		])

		if (isValid.length > 0) {
			return res.status(200).json({ paket: isValid[0] })
		} else {
			return res.status(400).json({ failed: "Order tidak ditemukan." })
		}
	} catch (err) {
		console.error(err)
	}
}

module.exports = { order, orderValidation }
