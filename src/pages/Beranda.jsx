/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faListCheck,
	faCommentDots,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom/dist"
import { Cookies } from "react-cookie"
import FormatCurrency from "../components/format-currency"
import programData from "../data/program-price.json"
import Cta from "../components/cta"
import "./css/beranda.css"

async function OrderValidate(order_id, status_code, transaction_status) {
	const navigate = useNavigate()
	const cookies = new Cookies()
	const user = await jwtDecode(cookies.get("auth-login"))

	const data = {
		order_id,
		user_id: user.id,
		status_code,
		transaction_status,
	}

	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/api/v1/orderValidation/`,
		data
	)

	if (response.status === 200) {
		cookies.set("auth-order", response.paket, { secure: true })
		navigate("/checkout/sukses")
	}
}

export default function Beranda() {
	const { search } = useLocation()
	const queryParams = new URLSearchParams(search)
	const order_id = queryParams.get("order_id")
	const status_code = queryParams.get("status_code")
	const transaction_status = queryParams.get("transaction_status")
	if (order_id && status_code && transaction_status) {
		OrderValidate(order_id, status_code, transaction_status)
	}
	return (
		<main id="beranda">
			<section id="hero" className="pt-5 pb-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-9">
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
						<div className="col-lg-3 d-flex justify-content-end">
							<img src="/assets/beranda/bijakcuan.png" alt="" />
						</div>
					</div>
				</div>
			</section>

			<section id="trailer">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7">
							<img src="/assets/beranda/trailer.png" alt="img" />
						</div>
						<div className="col-lg-5">
							<h3 className="mb-4">
								Langkah Awal Menuju Stabilitas Keuangan Bisnis
							</h3>
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
					<h2 className="text-center mb-5">Melangkah Bersama Bijakcuan</h2>
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
						{programData.map((program) => (
							<div className="col-lg-4" key={program.id}>
								<div
									className={`card ${
										program.name === "Bulanan" ? "primary" : ""
									}`}>
									<div className="card-header">
										<h3>{program.name}</h3>
										<div className="btn btn-outline-dark">
											{program.tagline}
										</div>
									</div>
									<div className="card-body"></div>
									<div className="card-footer">
										<div className="discount">
											{program.name === "Trial" ? (
												<p>Gratis</p>
											) : (
												<p>{FormatCurrency(program["initial-price"])}</p>
											)}
										</div>
										<h2 className="price">
											{program.name === "Trial" ? (
												<p>Gratis</p>
											) : (
												<p>{FormatCurrency(program.price)}</p>
											)}
										</h2>
										<Link to={"/program"} className="w-100 btn btn-primary">
											Dapatkan Sekarang
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="beranda-info">
				<div className="container text-center py-3">
					<p>
						Platform No 1 Untuk Meningkatkan <b>Stabilitas Finansial</b>{" "}
						Pebisnis Indonesia
					</p>
				</div>
			</section>

			<section id="testimonial">
				<div className="container">
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
				</div>
			</section>

			<Cta />
		</main>
	)
}
