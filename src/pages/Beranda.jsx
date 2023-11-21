/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faListCheck,
	faCommentDots,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import "./css/beranda.css"

export default function Beranda() {
	return (
		<main id="beranda">
			<section id="hero" className="pb-0">
				<div className="container">
					<div className="row">
						<div className="col">
							<h1 className="mb-4">
								Kembangkan Bisnis Anda dengan Pengelolaan Keuangan yang Efektif
							</h1>
							<p>
								"Jika kamu tidak tahu cara mengelola uangmu, uangmu akan pergi
								darimu"
								<br />- Robert Kiyosaki
							</p>
							<Link to={"/program"} className="btn btn-primary">
								Gabung Sekarang
							</Link>
						</div>
						<div className="col-3">
							<img src="/assets/beranda/bijakcuan.png" alt="" />
						</div>
					</div>
				</div>
			</section>

			<section id="trailer" className="border-top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col">
							<img src="/assets/beranda/trailer.png" alt="img" />
						</div>
						<div className="col">
							<h2 className="mb-4">
								Langkah Awal Menuju Stabilitas Keuangan Bisnis
							</h2>
							<p className="mb-5">
								Sudahkah Anda Siap Rugi dan Bangkrut? Tanpa Pengelolaan Keuangan
								yang Baik, Bisnis Terancam Kerugian, Kehilangan Keuntungan, dan
								Terjebak Utang.
							</p>
							<Link to={"/program"} className="btn btn-primary">
								Cegah Sekarang
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section id="benefit">
				<div className="container">
					<h2 className="text-center mb-5">BELAJAR DI BIJAK CUAN</h2>
					<div className="row d-none d-lg-flex gap-5 justify-content-between mb-5">
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faListCheck} />
							<p>
								Materi Dari <b>Para Expert</b> Dibidang Keuangan
							</p>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCommentDots} />
							<p>
								Konsultasi Kendala Keuanganmu <b>Bersama Ahli</b>
							</p>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>
								Data Yang Aktual Berdasarkan <b>Riset Mendalam</b>
							</p>
						</div>
					</div>
					<div className="row gap-5 gap-lg-0 text-center align-items-center">
						<div className="col-lg-4">
							<div className="card">
								<div className="card-header">
									<h2>Trial</h2>
									<div className="btn btn-outline-dark">Coba Gratis</div>
								</div>
								<div className="card-body"></div>
								<div className="card-footer">
									<div className="discount">
										<p>Rp 49.000</p>
									</div>
									<h2 className="price">Gratis</h2>
									<Link to={"/program"} className="w-100 btn btn-primary">
										Dapatkan Sekarang
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card primary">
								<div className="card-header">
									<h2>Bulanan</h2>
									<div className="btn btn-outline-dark">Harga Terbaik</div>
								</div>
								<div className="card-body"></div>
								<div className="card-footer">
									<div className="discount">
										<p>Rp 199.000</p>
									</div>
									<h2 className="price">Rp 99.000</h2>
									<Link to={"/program"} className="w-100 btn btn-primary">
										Dapatkan Sekarang
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card">
								<div className="card-header">
									<h2>Lifetime</h2>
									<div className="btn btn-outline-dark">Akses Selamanya</div>
								</div>
								<div className="card-body"></div>
								<div className="card-footer">
									<div className="discount">
										<p>Rp 599.000</p>
									</div>
									<h2 className="price">Rp 249.000</h2>
									<Link to={"/program"} className="w-100 btn btn-primary">
										Dapatkan Sekarang
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="beranda-info">
				<div className="container text-center">
					<p>
						Platform No 1 Untuk Meningkatkan <b>Stabilitas Finansial</b>{" "}
						Pebisnis Indonesia
					</p>
				</div>
			</section>

			<div className="container">
				{/* <section id="cta">
					<div className="row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg-6">
							<img
								src="/assets/beranda/finance.jpeg"
								className="d-block mx-lg-auto img-fluid"
								alt="Finance"
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="mb-4">
								Optimalkan KEUANGAN Anda dengan STRATEGI HEBAT bersama Bijakcuan
							</h2>
							<Link to={"/program"} className="btn btn-primary">
								Gabung Sekarang
							</Link>
						</div>
					</div>
				</section> */}

				<section id="testimonial">
					<div className="row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg-5">
							<img
								src="/assets/beranda/testimonial.png"
								className="card"
								alt=""
							/>
						</div>
						<div className="col-lg">
							<h5 className="mb-4 fw-normal">
								“Bijak Cuan adalah pilihan tepat untuk pemilik bisnis. Mereka
								memberikan wawasan yang sangat bermanfaat dan praktis dalam
								mengelola keuangan bisnis. Saya sangat puas dengan hasil yang
								saya capai berkat platform ini.”
							</h5>
							<h2 className="mb-0">Ani</h2>
							<p>Pengusaha Warung Makan</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}
