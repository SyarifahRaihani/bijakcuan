import "./css/checkout.css"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { Cookies } from "react-cookie"

export default function PembayaranSukses() {
	const cookies = new Cookies()

	useEffect(() => {
		async function getID() {
			const user = await jwtDecode(cookies.get("auth-login"))

			const data = {
				user_id: user.id,
			}

			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/api/v1/orderGet/`,
				data
			)

			if (response.data.paket == "Trial") {
				cookies.set("auth-trial", response.data.order)
			} else {
				cookies.set("auth-order", response.data.order)
			}
		}
		if (
			cookies.get("auth-order") == undefined ||
			cookies.get("auth-trial") == undefined
		) {
			cookies.remove("auth-order")
			cookies.remove("auth-trial")
			getID()
		}
	}, [])
	return (
		<main id="sukses">
			<Helmet>
				<title>Pembayaran Sukses | Bijakcuan.</title>
			</Helmet>
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<FontAwesomeIcon
						icon={faCheckCircle}
						className="mb-4 text-success"></FontAwesomeIcon>
					<h1 className="mb-4">Pembayaran Sukses</h1>
					<p className="mb-5 w-75 mx-auto">
						Silahkan mempelajari materi kelas yang telah kami design dengan baik
						untuk mencapai goals
					</p>
					<Link to="/profil" className="btn btn-primary">
						Mulai Belajar
					</Link>
				</div>
			</div>
		</main>
	)
}
