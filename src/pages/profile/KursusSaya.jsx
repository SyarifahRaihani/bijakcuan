import { Link } from "react-router-dom"
import { Cookies } from "react-cookie"

export default function KursusSaya() {
	const cookies = new Cookies()
	return (
		<section id="kursusSaya">
			{cookies.get("auth-order") || cookies.get("auth-trial") ? (
				<div className="card container">
					<div className="card-body">
						<div className="row">
							<div className="col-md-12 pt-1">
								<h5>Selamat Belajar</h5>
							</div>
							<div className="col-md-12">
								<p>
									Silahkan mempelajari materi kelas yang telah kami desain
									dengan baik untuk mencapai goals Anda
								</p>
							</div>
							<div className="col-md-12 mt-4">
								<Link to={"/kursus"} className="btn btn-primary btn-sm">
									Mulai Belajar
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="card container">
					<div className="card-body">
						<div className="row">
							<div className="col-md-12 pt-1">
								<h5>Ayo Gabung Membership Bijakcuan</h5>
							</div>
							<div className="col-md-12">
								<p>
									Silahkan pilih paket Anda sekarang untuk dapatkan segala
									manfaat Bijakcuan untuk sukseskan bisnis Anda.
								</p>
							</div>
							<div className="col-md-12 mt-4">
								<Link to={"/program"} className="btn btn-primary btn-sm">
									Pilih Paket
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
