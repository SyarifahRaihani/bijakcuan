import "./css/daftar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Masuk() {
	const router = useLocation()
	const handleLogin = () => {
		localStorage.setItem("isLoggedIn", true)
		router.reload()
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
								<div className="d-flex flex-column gap-2">
									<div className="form-outline">
										<input
											type="username"
											id="username"
											className="form-control"
											placeholder="Username/email"
										/>
									</div>

									<div className="form-outline mb-4">
										<input
											type="password"
											id="password"
											className="form-control"
											placeholder="Password"
										/>
									</div>
								</div>
								<div className="mb-4 w-100 d-flex justify-content-between">
									<div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="form2Example34"
												checked
											/>
											<label
												className="form-check-label"
												htmlFor="form2Example34">
												{" "}
												Ingat saya{" "}
											</label>
										</div>
									</div>

									<div>
										<a href="#" className="text-decoration-none">
											Lupa password?
										</a>
									</div>
								</div>

								<div className="d-grid gap mb-4">
									<Link
										onClick={handleLogin}
										to={"/profil"}
										className="btn btn-primary">
										Masuk
									</Link>
								</div>

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
		</main>
	)
}
