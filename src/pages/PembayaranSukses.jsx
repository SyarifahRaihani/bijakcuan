import "./css/checkout.css"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

export default function PembayaranSukses() {
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
