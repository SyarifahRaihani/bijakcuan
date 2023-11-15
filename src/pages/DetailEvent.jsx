import "./css/event.css"
import { Helmet } from "react-helmet"

export default function DetailEvent() {
	return (
		<main id="detailevent">
			<Helmet>
				<title>Event | Bijakcuan.</title>
			</Helmet>
			<div className="hero">
				<div className="container p-5">
					<div className="row justify-content-end flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg-6">
							<p className="text-white">
								Tanggal <b>14 Nov 2023</b>
							</p>
							<h3 className="mb-4 text-white">
								Webinar &quot;Dasar-dasar Pengelolaan Keuangan&quot;
							</h3>
							<p className="deskripsi mb-5 text-white">
								Acara ini cocok untuk pemilik bisnis, wirausahawan, dan siapa
								pun yang ingin meningkatkan kemampuan mereka dalam mengelola
								keuangan bisnis dengan efektif.
							</p>
						</div>
						<div className="col-lg-6">
							<img className="img-fluid" src="/assets/event/event2.png" />
						</div>
					</div>
				</div>
			</div>
			<div className="p-3">
				<div className="row">
					<div className="col-lg-9">
						<h6>
							[Memperkenalkan &quot;Dasar-dasar Pengelolaan Keuangan&quot;]
						</h6>
						<p>
							Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan,
							dengan fokus khusus pengenalan pada dasar-dasar pengelolaan
							keuangan, investasi, dan perencanaan keuangan pribadi. 💰📊 <br />
							<br />
							Dalam kolaborasi dengan Financial Advisor berpengalaman, event ini
							dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta
							pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan
							interaktif. <br />
							<br />
							Baik Anda seorang pemula atau ingin meningkatkan keterampilan
							Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk
							menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari
							para ahli industri. <br />
							<br /> Jangan lewatkan kesempatan luar biasa ini untuk memulai
							perjalanan pengelolaan keuangan Anda! 💻💡
						</p>
					</div>
					<div className="col-lg-3">
						<div className="card ">
							<h6>Ikuti Event</h6>
							<p>
								Perluas wawasan dan pengalamanmu dengan mengikuti event ini
								sekarang.
							</p>
							<button className="btn btn-primary">ikuti event</button>
							<h6>Jadwal Pelaksanaan</h6>
							<p>Mulai: 14 Nov 2023 19:00</p>
							<p>Selesai: 14 Nov 2023 21:00</p>
							<h6>Lokasi</h6>
							<p>Online Conference</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
