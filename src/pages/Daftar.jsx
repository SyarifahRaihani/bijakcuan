import "./css/daftar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Cookies } from "react-cookie"
import { SITE_URL } from "../utils/env"
import { useNavigate } from "react-router-dom/dist"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Daftar() {
	const cookies = new Cookies()
	const navigate = useNavigate()
	const [failed, setFailed] = useState("")

	useEffect(() => {
		if (cookies.get("auth-login")) {
			navigate("/")
		}
	}, [])

	const [values, setValues] = useState({
		username: "",
		name: "",
		email: "",
		phone: "",
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
		setFailed("")
		axios
			.post(`${SITE_URL}/api/daftar`, values)
			.then((res) => {
				if (res.data.failed) {
					const failed = res.data.failed
					setFailed(failed)
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
		<main id="daftar">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-6 ">
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
									src="/assets/logo.jpg"
									alt="Logo BijakCuan"
									style={{
										borderRadius: "2rem",
										height: "100px",
										width: "100px",
									}}
									className="mb-4"
								/>
								<h3 className="mb-1 fw-bold">Daftar</h3>
								<p className="mb-4">Mulai perjalanan Anda bersama BijakCuan</p>
								{failed && (
									<div id="wrong" className="alert alert-danger mb-4">
										<p>{failed}</p>
									</div>
								)}
								<div className="d-flex flex-column gap-4">
									<form
										onSubmit={handleSubmit}
										className="form-outline d-flex flex-column gap-2">
										<input
											onChange={handleInput}
											type="text"
											name="name"
											id="name"
											className="form-control"
											placeholder="Nama (Maks. 50 Karakter)"
											required
										/>
										<input
											onChange={handleInput}
											type="text"
											name="username"
											id="username"
											className="form-control"
											placeholder="Username"
											required
										/>
										<input
											onChange={handleInput}
											type="password"
											name="password"
											id="password"
											className="form-control"
											placeholder="Password"
											required
										/>
										<input
											onChange={handleInput}
											type="email"
											name="email"
											id="email"
											className="form-control"
											placeholder="Alamat Email"
											required
										/>
										<input
											onChange={handleInput}
											type="text"
											name="phone"
											id="phone"
											className="form-control"
											placeholder="No Telepon"
											required
										/>
										<button type="submit" className="btn btn-primary mt-3">
											Daftar
										</button>
									</form>

									<p>
										Sudah memiliki akun?{" "}
										<Link
											to="/masuk"
											className="text-dark text-decoration-underline">
											Masuk sekarang
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
