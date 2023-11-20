import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Cookies } from "react-cookie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import price from "../../data/program-price"
import FormatCurrency from "../format-currency"

export default function CardProgram() {
	const [paket, setPaket] = useState("Bulanan")
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const cookies = new Cookies()

	useEffect(() => {
		const isLoggedInUser = cookies.get("auth-login")
		if (isLoggedInUser) {
			setIsLoggedIn(true)
		}
	}, [])

	const handlePaketChange = (paket) => {
		setPaket(paket)
	}

	return (
		<div className="card">
			<div className="card-body d-flex flex-column gap-5">
				<h4>Bijak Cuan Membership</h4>
				<div id="content-paket">
					<h6>Pilihan Paket</h6>
					<div className="row">
						<div className="col">
							<div
								className={`btn ${
									paket === "Trial" ? "btn-primary" : "btn-outline-primary"
								}`}
								onClick={() => handlePaketChange("Trial")}>
								Trial
							</div>
						</div>
						<div className="col">
							<div
								className={`btn ${
									paket === "Bulanan" ? "btn-primary" : "btn-outline-primary"
								}`}
								onClick={() => handlePaketChange("Bulanan")}>
								Bulanan
							</div>
						</div>
						<div className="col">
							<div
								className={`btn ${
									paket === "Lifetime" ? "btn-primary" : "btn-outline-primary"
								}`}
								onClick={() => handlePaketChange("Lifetime")}>
								Lifetime
							</div>
						</div>
					</div>
				</div>
				<div id="content-benefit">
					<h6>Benefit</h6>
					<div className="d-flex flex-column gap-2">
						<div className="d-flex gap-2">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>Materi Up-To-Date</p>
						</div>
						<div className="d-flex gap-2">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>Mentor Profesional</p>
						</div>
						<div className="d-flex gap-2">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>Forum Diskusi</p>
						</div>
					</div>
				</div>
				<div id="content-price">
					<h6>Biaya</h6>
					<h2>{FormatCurrency(price[paket])}</h2>
				</div>
				<div id="content-checkout">
					<Link
						to={`${isLoggedIn ? `/checkout?paket=${paket}` : "/daftar"}`}
						className="btn btn-primary w-100">
						Gabung Sekarang
					</Link>
				</div>
			</div>
		</div>
	)
}
