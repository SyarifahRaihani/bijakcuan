require("dotenv").config()
const query = require("../database")
const midtransClient = require("midtrans-client")

async function order(req, res) {
	const { order_id, user_id, promo_id, paket, nama, email, total } =
		await req.body

	if (
		order_id === undefined ||
		user_id === undefined ||
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
		  INSERT INTO orders (id, user_id, promo_id, paket, total, created_at)
		  VALUES (?, ?, ?, ?, ?, NOW());`,
			[order_id, user_id, promo_id, paket, total]
		)

		if (total > 0) {
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
		} else {
			await query(
				`
				UPDATE orders SET status_order = "settlement" WHERE id = ? AND user_id = ?;`,
				[order_id, user_id]
			)
			res.status(200).json({ token: order_id })
		}
	} catch (err) {
		console.error(err)
	}
}

async function orderValidation(req, res) {
	const { order_id, user_id, status_code, transaction_status } = await req.body

	if (
		order_id === undefined ||
		user_id === undefined ||
		status_code === undefined ||
		transaction_status === undefined
	) {
		return res.status(400).json({ failed: "Data tidak lengkap." })
	}

	try {
		const isValid = await query(
			`SELECT paket FROM orders WHERE id = ? AND user_id = ?;`,
			[order_id, user_id]
		)

		if (isValid.length > 0) {
			await query(
				`
				UPDATE orders SET status_order = ?, updated_at = NOW() WHERE id = ? AND user_id = ?;`,
				[transaction_status, order_id, user_id]
			)
			return res.status(200).json({ paket: order_id })
		} else {
			return res.status(400).json({ failed: "Order tidak ditemukan." })
		}
	} catch (err) {
		console.error(err)
	}
}

async function orderGet(req, res) {
	const { user_id } = await req.body
	try {
		const isCourse = await query(
			`SELECT status_order, id, created_at, paket FROM orders WHERE user_id = ? ORDER BY created_at DESC LIMIT 1;`,
			[user_id]
		)

		if (isCourse.length > 0) {
			if (isCourse[0].status_order == "settlement") {
				res.json({ order: isCourse[0].id, paket: isCourse[0].paket })
			}
		} else {
			return res.status(400).json({ failed: "Order tidak ditemukan." })
		}
	} catch (err) {
		console.error(err)
	}
}

module.exports = { order, orderValidation, orderGet }
