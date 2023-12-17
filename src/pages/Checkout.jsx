import "./css/checkout.css"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate, Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { Cookies } from "react-cookie"
import Helmet from "react-helmet"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import FormatCurrency from "../components/format-currency"
import GenerateOrderId from "../components/checkout/generate-order-id"
import programData from "../data/program-price.json"
import discountData from "../data/checkout-discount.json"

async function getToken(total, paket, discount) {
	const cookies = new Cookies()
	const user = await jwtDecode(cookies.get("auth-login"))
	const data = {
		order_id: GenerateOrderId(paket),
		user_id: user.id,
		promo_id: discount,
		paket: paket,
		nama: user.name,
		email: user.email,
		total: total,
	}

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	}

	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/api/v1/order/`,
		data,
		config
	)

	return response.data.token
}

export default function Checkout() {
	const [searchParams] = useSearchParams()
	const [selectedProgram, setSelectedProgram] = useState(programData[1])
	const [discount, setDiscount] = useState(0)
	const [discountId, setDiscountId] = useState(null)
	const [totalPrice, setTotalPrice] = useState(0)
	const [random, setRandom] = useState(0)
	const cookies = new Cookies()
	const paket = searchParams.get("paket")
	const navigate = useNavigate()

	useEffect(() => {
		if (paket !== "Trial" && paket !== "Bulanan" && paket !== "Lifetime") {
			navigate("/program")
		}

		if (paket !== "Trial") {
			setRandom(Math.floor(Math.random() * 100) + 1)
		}

		const program = programData.find((program) => program.name === paket)
		setSelectedProgram(program)
	}, [])

	useEffect(() => {
		setTotalPrice(selectedProgram.price - random)
	}, [selectedProgram, random])

	const handleDiscount = (code) => {
		const foundDiscount = discountData.find((item) => item.code === code)
		if (foundDiscount) {
			setDiscount(foundDiscount.discount * selectedProgram.price)
			setDiscountId(foundDiscount.id)
		} else {
			setDiscount(0)
			setDiscountId(null)
		}
	}

	const handleCheckout = async (total, paket) => {
		let token = await getToken(total, paket)
		if (total === 0 && paket === "Trial") {
			cookies.set("auth-order", token, { secure: true })
			navigate("/checkout/sukses")
		} else {
			window.location.href = `https://app.sandbox.midtrans.com/snap/v3/redirection/${token}`
		}
	}

	return (
		<main id="checkout">
			<Helmet>
				<title>Checkout | Bijakcuan.</title>
			</Helmet>
			<div className="container pt-4 pb-5">
				<Link to="/program">
					<div className="d-flex align-items-center gap-2 mb-4">
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="text-black"></FontAwesomeIcon>
						<p>Kembali</p>
					</div>
				</Link>
				<div className="row mb-4">
					<div className="col-lg-6">
						<h2>Laporan Terakhir Dapatkan Pembelajaran Impian Anda</h2>
					</div>
					<div className="col-lg-6"></div>
				</div>
				<div className="row d-flex gap-4 gap-lg-0">
					<div className="col-lg-6">
						<div className="card">
							<img src="/assets/checkout/course.png" alt="" />
							<div className="position-absolute ms-4 mt-4">
								<div className="btn btn-light">{paket}</div>
							</div>
							<div className="card-body">
								<h4 className="mb-4">Bijakcuan Membership</h4>
								<div id="checkout-benefit" className="d-flex flex-column gap-2">
									<div className="d-flex gap-2 align-item-center">
										<FontAwesomeIcon
											icon={faCircleCheck}
											className="text-success"
										/>
										<p>Materi Up-To-Date</p>
									</div>
									<div className="d-flex gap-2 align-item-center">
										<FontAwesomeIcon
											icon={faCircleCheck}
											className="text-success"
										/>
										<p>Mentor Profesional</p>
									</div>
									<div className="d-flex gap-2 align-item-center">
										<FontAwesomeIcon
											icon={faCircleCheck}
											className="text-success"
										/>
										<p>Forum Diskusi</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="card">
							<div className="card-body d-flex flex-column gap-5">
								<div>
									<h5>Metode Pembayaran</h5>
									<div className="btn btn-primary">Otomatis</div>
								</div>
								<div className="d-flex flex-column gap-2">
									<h5>Kode Promo</h5>
									<input
										onChange={(e) => handleDiscount(e.target.value)}
										className="form-control"
										type="text"
										name="discount"
										id="discount"
										placeholder="Masukan kode promo agar lebih hemat"
									/>
								</div>
								<div className="d-flex flex-column gap-2">
									<h5>Detail Pembayaran</h5>
									<div className="d-flex flex-column gap-4">
										<div className="d-flex justify-content-between">
											<p>Harga Kursus</p>
											<p>{FormatCurrency(selectedProgram.price)}</p>
										</div>
										<div className="d-flex justify-content-between">
											<p>Kode Unik</p>
											<p className="color-info">-{FormatCurrency(random)}</p>
										</div>
										<div className="d-flex justify-content-between">
											<p>Diskon</p>
											<p className="color-info">-{FormatCurrency(discount)}</p>
										</div>
										<div className="d-flex justify-content-between">
											<h4>Total Harga</h4>
											<h4 id="total-harga">
												{FormatCurrency(totalPrice - discount)}
											</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div
									onClick={() =>
										handleCheckout(totalPrice - discount, paket, discountId)
									}>
									<div className="btn btn-primary w-100">
										Bayar & Gabung Kelas Sekarang
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
