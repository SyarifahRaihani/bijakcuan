/* eslint-disable no-undef */
const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const bcrypt = require("bcrypt")
const mysql = require("mysql2")

const app = express()
const PORT = 3001
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "bijakcuan_db",
})

const secretKey = require("crypto").randomBytes(32).toString("hex")

const checkPass = (pass, storedPass) => {
	return bcrypt.compareSync(pass, storedPass)
}

const encryptPass = (password) => {
	const saltRounds = 10
	const salt = bcrypt.genSaltSync(saltRounds)
	const hashedPassword = bcrypt.hashSync(password, salt)
	return hashedPassword
}

app.use(cors())
app.use(express.json())

app.post("/api/daftar", async (req, res) => {
	const { username, name, email, phone, password } = await req.body

	connection.connect()
	connection.query(
		`SELECT * FROM users WHERE username = '${username}' AND email = '${email}'`,
		(err, rows) => {
			if (err) {
				console.log(err)
				return
			} else if (rows[0]) {
				return res.status(200).json({
					failed: "Akun sudah digunakan. Silahkan gunakan akun yang lain.",
				})
			} else {
				connection.query(`
				INSERT INTO users (name, username, email, phone, password)
				VALUES ('${name}', '${username}', '${email}', '${phone}', '${encryptPass(
					password
				)}');`)
				return res.status(200).json({
					success: "Akun berhasil dibuat.",
				})
			}
		}
	)
})

app.post("/api/masuk", async (req, res) => {
	const { username, password } = await req.body

	connection.connect()
	connection.query(
		`SELECT * FROM users WHERE username = '${username}' OR email = '${username}'`,
		(err, rows) => {
			if (err) {
				console.log(err)
				return
			} else if (!rows[0]) {
				return res.status(200).json({
					wrongUser: "Username yang Anda masukan salah",
				})
			} else {
				const isPassMatch = checkPass(password, rows[0].password)
				if (isPassMatch) {
					const token = jwt.sign(
						{
							id: rows[0].id,
							username: rows[0].username,
							name: rows[0].name,
							email: rows[0].email,
							phone: rows[0].phone,
							image: rows[0]?.image,
						},
						secretKey,
						{ expiresIn: "1h" }
					)
					res.json({ token })
				} else {
					res.status(200).json({
						wrongPass: "Password yang Anda masukan salah",
					})
				}
			}
		}
	)
})

app.get("/api/promo", async (req, res) => {
	try {
		const query = "SELECT * FROM promo"
		connection.query(query, (err, results) => {
			if (err) {
				console.error(err)
				res.status(500).send(err)
			} else {
				res.json(results)
			}
		})
	} catch (error) {
		console.error(error)
		res.status(500).send(error)
	}
})

app.get("/api/artikel", async (req, res) => {
	try {
		const query = "SELECT * FROM artikel"
		connection.query(query, (err, results) => {
			if (err) {
				console.error(err)
				res.status(500).send(err)
			} else {
				res.json(results)
			}
		})
	} catch (error) {
		console.error(error)
		res.status(500).send(error)
	}
})

app.get("/api/detail/:id", async (req, res) => {
	try {
		const id = req.params.id
		const query = "SELECT * from artikel WHERE id = ?;"
		connection.query(query, [id], (err, results) => {
			if (err) {
				console.error(err)
				res.status(500).send(err)
			} else {
				res.json(results[0])
			}
		})
	} catch (error) {
		console.error(error)
		res.status(500).send(error)
	}
})


app.get("/", (req, res) => {
	res.send(`Server listening on port ${PORT}`)
})

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`)
})
