import "./css/daftar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom/dist"
import { SITE_URL } from "../utils/env"
import { Cookies } from "react-cookie"
import axios from "axios"

export default function Masuk() {
	const cookies = new Cookies()
	const navigate = useNavigate()
	const [wrongUser, setWrongUser] = useState("")
	const [wrongPass, setWrongPass] = useState("")

	useEffect(() => {
		if (cookies.get("auth-login")) {
			navigate("/")
		}
	}, [])

	const [values, setValues] = useState({
		username: "",
		password: "",
	})

	const handleInput = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setWrongUser("")
		setWrongPass("")
		axios
			.post(`${SITE_URL}/api/masuk`, values)
			.then((res) => {
				if (res.data.wrongUser) {
					const wrong = res.data.wrongUser
					setWrongUser(wrong)
					return
				} else if (res.data.wrongPass) {
					const wrong = res.data.wrongPass
					setWrongPass(wrong)
					return
				} else {
					const token = res.data.token

					cookies.set("auth-login", token, { secure: true })

					navigate("/")
					window.location.reload()
				}
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}

	return (
		<main id="masuk">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-6">
						<div
							className="card shadow-3 px-5"
							style={{ borderRadius: "1rem" }}>
							<div className="card-body p-5 text-center">
								<Link
									to="/"
									className="d-flex align-items-center justify-content-start gap-2 mb-4">
									<FontAwesomeIcon
										icon={faArrowLeft}
										className="height-56"></FontAwesomeIcon>
									Kembali
								</Link>
								<img
									src="assets/logo.jpg"
									alt="Logo BijakCuan"
									style={{
										borderRadius: "2rem",
										height: "100px",
										width: "100px",
									}}
									className="mb-4"
								/>
								<h3 className="mb-1 fw-bold">Masuk</h3>
								<p className="mb-4 ">Kembali bertumbuh bersama BijakCuan</p>
								{wrongUser || wrongPass ? (
									<div id="wrong" className="alert alert-danger mb-4">
										<p>{wrongUser || wrongPass}</p>
									</div>
								) : (
									<div></div>
								)}
								<div className="d-flex flex-column gap-4">
									<form
										onSubmit={handleSubmit}
										className="form-outline d-flex flex-column gap-2">
										<input
											onChange={handleInput}
											type="text"
											name="username"
											id="username"
											className={`form-control ${
												wrongUser ? "border-danger text-danger" : ""
											}`}
											placeholder="Username/email"
											required
										/>
										<input
											onChange={handleInput}
											type="password"
											name="password"
											id="password"
											className={`form-control ${
												wrongPass ? "border-danger text-danger" : ""
											}`}
											placeholder="Password"
											required
										/>
										<button type="submit" className="btn btn-primary mt-3">
											Masuk
										</button>
									</form>

									<p>
										Belum memiliki akun?{" "}
										<Link
											to="/daftar"
											className="text-dark text-decoration-underline">
											Daftar sekarang
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
