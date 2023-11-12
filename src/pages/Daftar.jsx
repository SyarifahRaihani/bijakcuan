import "./css/daftar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function Daftar() {
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
									href="/"
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

								<div className="d-flex flex-column gap-2">
									<div className="form-outline">
										<input
											type="name"
											id="name"
											className="form-control"
											placeholder="Nama (Maks. 50 Karakter)"
										/>
									</div>

									<div className="form-outline">
										<input
											type="username"
											id="username"
											className="form-control"
											placeholder="Username"
										/>
									</div>

									<div className="form-outline">
										<input
											type="password"
											id="password"
											className="form-control"
											placeholder="Password"
										/>
									</div>

									<div className="form-outline">
										<input
											type="email"
											id="email"
											className="form-control"
											placeholder="Alamat Email"
										/>
									</div>

									<div className="form-outline">
										<input
											type="text"
											id="noTlp"
											className="form-control"
											placeholder="No Telepon"
										/>
									</div>

									<div className="form-outline mb-4">
										<input
											type="text"
											id="domisili"
											className="form-control"
											placeholder="Domisili"
										/>
									</div>
								</div>

								<div className="d-grid gap mb-4">
									<Link href={"/masuk"} className="btn btn-primary">
										Daftar
									</Link>
								</div>

								<p>
									Sudah memiliki akun?{" "}
									<Link
										href="/masuk"
										className="text-dark text-decoration-underline">
										Masuk sekarang
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
