import "./css/kursus.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Helmet from "react-helmet"

export default function Kursus() {
	return (
		<main id="kursus">
			<Helmet>
				<title>Kursus | Bijakcuan.</title>
			</Helmet>
			<div className="container pt-4 pb-5">
				<div className="row">
					<div className="col-lg-4 kursus-nav d-flex flex-column gap-4">
						<Link
							to="/profil"
							className="d-flex align-items-center justify-content-start gap-2 mb-4">
							<FontAwesomeIcon
								icon={faArrowLeft}
								className="height-56"></FontAwesomeIcon>
							Kursus Saya
						</Link>
						<div className="card py-3">
							<h6>Pengenalan Keuangan Bisnis</h6>
							<Link href={"#"} className="nav-link active" aria-current="page">
								Intro Kursus
							</Link>
							<Link href={"#"} className="nav-link">
								Pengenalan Pengelolaan Keu...
							</Link>
							<Link href={"#"} className="nav-link">
								Manfaat Pengelolaan Keuangan
							</Link>
							<Link id="bawah" href={"#"} className="nav-link">
								Menentukan Tujuan Keuangan
							</Link>
						</div>
						<div className="card py-3">
							<h6>Mengelola Hutang</h6>
							<Link href={"#"} className="nav-link">
								Pengenalan Hutang
							</Link>
							<Link href={"#"} className="nav-link">
								Jenis Hutang
							</Link>
							<Link href={"#"} className="nav-link">
								Pengaruh Hutang
							</Link>
							<Link id="bottom" href={"#"} className="nav-link">
								Mengatur Hutang
							</Link>
						</div>
					</div>

					<div className="col-lg-8 kursus-content">
						<div className="card">
							<img
								src="/assets/kursus/triler.png"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="card-title">Intro Kursus</h5>
									</div>
									<div>
										<Link
											id="diskusi"
											to={"#"}
											className="btn btn-outline-primary btn-sm mx-2 my-1">
											Group Diskusi
										</Link>
										<Link
											id="lanjut"
											to={"#"}
											className="btn btn-primary btn-sm mx-2 my-1">
											Selanjutnya
										</Link>
									</div>
								</div>
								<br />
								<p>
									Apakah Anda seorang pengusaha yang ingin mengoptimalkan
									pengelolaan keuangan bisnis Anda? Atau mungkin Anda baru saja
									memulai usaha dan ingin memastikan bahwa Anda memiliki dasar
									yang kuat dalam mengelola finansial bisnis Anda? Apapun latar
									belakang Anda, kursus ini adalah tempat yang tepat untuk Anda.
								</p>
								<p>
									Dalam kursus ini, Anda akan mendapatkan wawasan mendalam
									tentang pengelolaan keuangan bisnis yang efisien dan berhasil.
									Kami akan membahas topik-topik penting seperti perencanaan
									anggaran, analisis laporan keuangan, strategi pengelolaan kas,
									dan banyak lagi. Kami juga akan memberikan tips dan trik
									praktis yang akan membantu Anda mengatasi tantangan keuangan
									yang mungkin Anda hadapi dalam bisnis Anda.
								</p>
								<p>
									Kami percaya bahwa pengelolaan keuangan yang baik adalah kunci
									keberhasilan bisnis, dan kursus ini dirancang khusus untuk
									membantu Anda mencapai tujuan finansial Anda. Bersiaplah untuk
									menjalani perjalanan belajar yang mendalam dan bermanfaat, dan
									bersiaplah untuk mengambil kendali penuh atas keuangan bisnis
									Anda.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
