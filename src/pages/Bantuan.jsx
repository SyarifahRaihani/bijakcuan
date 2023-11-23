import "./css/bantuan.css"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"
import faqData from "../data/bantuan-data"

export default function Bantuan() {
	return (
		<main id="bantuan">
			<Helmet>
				<title>Bantuan | Bijakcuan.</title>
			</Helmet>
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
				rel="stylesheet"></link>
			<section id="deskripsi">
				<div style={{ position: "relative" }}>
					<img
						src="/assets/pusat-bantuan/bantuan.png"
						alt="Pusat Bantuan"
						style={{ width: "100%" }}
					/>
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							textAlign: "center",
						}}>
						<h1 style={{ color: "white" }}>Butuh Bantuan</h1>
					</div>
				</div>

				<div className="container py-5">
					<div className="col">
						<p
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								maxWidth: "900px",
								textAlign: "justify",
							}}>
							Selamat datang di Halaman Bantuan Bijak Cuan, tempat yang
							dirancang khusus untuk membantu Anda mengatasi permasalahan
							finansial dan menjalani kehidupan yang lebih bijak secara
							finansial. Kami memahami bahwa mengelola keuangan bisa menjadi
							tugas yang rumit, itulah sebabnya kami hadir di sini untuk
							memudahkan perjalanan Anda.
						</p>
						<br />
						<p
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								maxWidth: "900px",
								textAlign: "justify",
							}}>
							Di sini, Anda akan menemukan panduan lengkap mengenai penggunaan
							Bijak Cuan, termasuk cara memanfaatkan alat dan layanan kami
							dengan efektif. Kami akan membimbing Anda melalui langkah demi
							langkah yang mudah diikuti, sehingga Anda bisa mengambil keputusan
							finansial yang bijak dan terinformasi. Tim layanan pelanggan kami
							yang ramah siap memberikan dukungan 24/7. Jika Anda memiliki
							pertanyaan atau butuh bantuan, jangan ragu untuk menghubungi kami.
							Kami berkomitmen untuk memberikan respon cepat dan solusi yang
							sesuai dengan kebutuhan Anda.
						</p>
						<br />
						<p
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								maxWidth: "900px",
								textAlign: "justify",
							}}>
							Selain itu, jangan lupa untuk menjelajahi daftar pertanyaan yang
							sering diajukan (FAQ) kami. Di sini, Anda akan menemukan jawaban
							atas banyak pertanyaan umum yang mungkin Anda miliki mengenai
							produk dan layanan kami.
						</p>
						<br />
						<p
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								maxWidth: "900px",
								textAlign: "justify",
							}}>
							Kami hadir dengan satu tujuan utama: membantu Anda meraih
							kesuksesan keuangan. Bersama Bijak Cuan, Anda tidak sendirian
							dalam perjalanan finansial Anda. Kami siap mendampingi Anda dan
							memberikan dukungan yang Anda butuhkan agar Anda dapat mencapai
							tujuan finansial Anda dengan lebih percaya diri. Terima kasih atas
							kepercayaan Anda kepada Bijak Cuan. Kami berharap Anda menemukan
							semua informasi yang Anda cari di halaman bantuan kami dan dapat
							memanfaatkan layanan kami dengan maksimal.
						</p>
					</div>
				</div>
			</section>

			<section id="faq">
				<div className="container col-7">
					<h3 className="text-center pb-3 ">
						Pertanyaan Yang Sering Di tayakan
					</h3>
					<div className="accordion accordion-flush" id="accordionFlushExample">
						{faqData.map((faq) => (
							<div className="accordion-item" key={faq.id}>
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#flush-collapse${faq.id}`}
										aria-expanded="false"
										aria-controls={`flush-collapse${faq.id}`}>
										{faq.question}
									</button>
								</h2>
								<div
									id={`flush-collapse${faq.id}`}
									className="accordion-collapse collapse"
									data-bs-parent="#accordionFlushExample">
									<div className="accordion-body">{faq.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section>
				<div className="hero2 mt-5">
					<div className="container text-center">
						<div className="row justify-content-center flex-column-reverse flex-lg-row">
							<div className="col-lg-8">
								<h1 className="text-white px-5 mb-5">
									Buka Kesuksesan Finansial Anda Sekarang Bersama Bijakcuan
								</h1>
								<Link to={"/program"} className="btn btn-primary mb-10">
									Gabung Sekarang
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
