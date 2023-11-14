import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import price from "../../data/program-price"
import FormatCurrency from "../../components/format-currency"

export default function CardProgram() {
	const [paket, setPaket] = useState("monthly")
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const isLoggedInUser = localStorage.getItem("isLoggedIn")
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
									paket === "trial" ? "btn-primary" : "btn-outline-primary"
								}`}
								onClick={() => handlePaketChange("trial")}>
								Trial
							</div>
						</div>
						<div className="col">
							<div
								className={`btn ${
									paket === "monthly" ? "btn-primary" : "btn-outline-primary"
								}`}
								onClick={() => handlePaketChange("monthly")}>
								Bulanan
							</div>
						</div>
						<div className="col">
							<div
								className={`btn ${
									paket === "lifetime" ? "btn-primary" : "btn-outline-primary"
								}`}
								onClick={() => handlePaketChange("lifetime")}>
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
						href={`${isLoggedIn ? `/checkout?paket=${paket}` : "/daftar"}`}
						className="btn btn-primary w-100">
						Gabung Sekarang
					</Link>
				</div>
			</div>
		</div>
	)
}
