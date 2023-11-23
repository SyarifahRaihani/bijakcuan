import { Link } from "react-router-dom"
import Helmet from "react-helmet"

export default function PembayaranSukses() {
	return (
		<main id="Sukses">
			<Helmet>
				<title>Pembayaran Sukses | Bijakcuan.</title>
			</Helmet>
			<div className="container align-items-center d-flex justify-content-center">
				<div className="container-lg text-center">
					<img
						className="img-fluid"
						src="/assets/pembayaran-sukses/sukses.png"
					/>
					<h1 className="mb-4">Pembayaran Sukses</h1>
					<p className="mb-5 w-75 mx-auto">
						Silahkan mempelajari materi kelas yang telah kami design dengan baik
						untuk mencapai goals
					</p>
					<Link href={"/beranda"} className="btn btn-primary">
						Mulai Belajar
					</Link>
				</div>
			</div>
		</main>
	)
}
