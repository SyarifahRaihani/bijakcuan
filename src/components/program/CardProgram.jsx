import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Cookies } from "react-cookie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import programData from "../../data/program-price"
import FormatCurrency from "../format-currency"

export default function CardProgram() {
	const [paket, setPaket] = useState("Bulanan")
	const [selectedProgram, setSelectedProgram] = useState(programData[1])
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const cookies = new Cookies()

	useEffect(() => {
		const isLoggedInUser = cookies.get("auth-login")
		if (isLoggedInUser) {
			setIsLoggedIn(true)
		}
	}, [])

	const handlePaketChange = (paket, id) => {
		setPaket(paket)
		setSelectedProgram(programData[id])
	}

	return (
		<div className="card">
			<div className="card-body d-flex flex-column gap-5">
				<h4>Bijak Cuan Membership</h4>
				<div id="content-paket">
					<h6>Pilihan Paket</h6>
					<div className="row">
						{programData.map((program) => (
							<div className="col" key={program.id}>
								<div
									className={`btn ${
										paket === program.name
											? "btn-primary"
											: "btn-outline-primary"
									}`}
									onClick={() =>
										handlePaketChange(program.name, program.id - 1)
									}>
									{program.name}
								</div>
							</div>
						))}
					</div>
				</div>
				<div id="content-benefit">
					<h6>Benefit</h6>
					<div className="d-flex flex-column gap-2">
						{selectedProgram.benefit.map((benefit, index) => (
							<div className="d-flex gap-2" key={index}>
								<FontAwesomeIcon icon={faCircleCheck} />
								<p>{benefit}</p>
							</div>
						))}
					</div>
				</div>
				<div id="content-price">
					<h6>Biaya</h6>
					<h2>{FormatCurrency(selectedProgram.price)}</h2>
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
