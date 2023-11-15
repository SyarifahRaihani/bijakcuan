import "./css/checkout.css"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import FormatCurrency from "../components/format-currency"
import GenerateOrderId from "../components/checkout/generate-order-id"
import priceData from "../data/program-price.json"
import discountData from "../data/checkout-discount.json"

async function getToken(total) {
	const PAYMENT_GATEWAY_API_SERVER = "https://bijak-cuan-api.vercel.app/api"
	const data = {
		order_id: GenerateOrderId(),
		total: total,
	}

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	}

	const response = await axios.post(PAYMENT_GATEWAY_API_SERVER, data, config)
	console.log(response.data.token)

	return response.data.token
}

export default function Checkout() {
	const [searchParams] = useSearchParams()
	const paket = searchParams.get("paket")

	if (paket !== "Trial" && paket !== "Bulanan" && paket !== "Lifetime") {
		return <Navigate to="/program" />
	}

	let random = 23
	const [discount, setDiscount] = useState(0)
	const [totalPrice] = useState(priceData[paket] - random)

	if (paket === "Trial") {
		random = 0
	}

	const handleDiscount = (code) => {
		const foundDiscount = discountData.find((item) => item.code === code)
		if (foundDiscount) {
			setDiscount(foundDiscount.discount * priceData[paket])
		} else {
			setDiscount(0)
		}
	}

	const handleCheckout = async (total) => {
		let token = await getToken(total)
		window.location.href = `https://app.sandbox.midtrans.com/snap/v3/redirection/${token}`
	}

	return (
		<main id="checkout">
			<div className="container pt-4 pb-5">
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
								<div className="d-flex flex-column gap-2">
									<div className="d-flex gap-2 align-item-center">
										<FontAwesomeIcon icon={faCircleCheck} />
										<p>Materi Up-To-Date</p>
									</div>
									<div className="d-flex gap-2 align-item-center">
										<FontAwesomeIcon icon={faCircleCheck} />
										<p>Mentor Profesional</p>
									</div>
									<div className="d-flex gap-2 align-item-center">
										<FontAwesomeIcon icon={faCircleCheck} />
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
									<h6>Metode Pembayaran</h6>
									<div className="btn btn-primary">Otomatis</div>
								</div>
								<div className="d-flex flex-column gap-2">
									<h6>Kode Promo</h6>
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
									<h6>Detail Pembayaran</h6>
									<div className="d-flex flex-column gap-4">
										<div className="d-flex justify-content-between">
											<p>Harga Kursus</p>
											<p>{FormatCurrency(priceData[paket])}</p>
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
								<div onClick={() => handleCheckout(totalPrice - discount)}>
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
