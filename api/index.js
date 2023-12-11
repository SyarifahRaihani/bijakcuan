require("dotenv").config()
const express = require("express")
const cors = require("cors")
const routes = require("./routes")

const app = express()
<<<<<<< HEAD
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
=======
const PORT = process.env.API_PORT
>>>>>>> b32ec07d031e896ef783fe1dc3686bf272601a9e

app.use(cors())
app.use(express.json())
app.use(routes)

<<<<<<< HEAD
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

app.get('/api/events', (req, res) => {
	connection.connect()
	const query = 'SELECT * FROM event';
	connection.query(query, (err, rows) => {
		if (err) {
			console.log(err)
			res.status(500).send('Internal Server Error');
		} else {
			res.json(rows)
		}
	})
})

app.get('/api/events/:id', (req, res) => {
	const eventId = req.params.id;
	const query = `SELECT * FROM event WHERE id = ${eventId}`;
	
	connection.query(query, (err, rows) => {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		} else {
			if (rows.length > 0) {
				let row = rows[0];
				const temp_waktu_mulai = new Date(row.waktu_mulai).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
				const temp_waktu_selesai = new Date(row.waktu_selesai).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
				row.formatted_waktu_mulai = temp_waktu_mulai.replace(/\//g, '-').replace(/\./g, ':');
				row.formatted_waktu_selesai = temp_waktu_selesai.replace(/\//g, '-').replace(/\./g, ':');
				res.json(row);
			} else {
				res.status(404).send('Event not found');
			}
		}
	});
});

app.get("/", (req, res) => {
	res.send(`Server listening on port ${PORT}`)
})

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`)
})
=======
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
>>>>>>> b32ec07d031e896ef783fe1dc3686bf272601a9e
