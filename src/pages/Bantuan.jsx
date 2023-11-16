"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import faqData from "../data/bantuan-data"

export default function Bantuan(){
    const [selectedQuestion, setSelectedQuestion] = useState(null)

	const toggleQuestion = (index) => {
		if (selectedQuestion === index) {
			setSelectedQuestion(null)
		} else {
			setSelectedQuestion(index)
		}
	}
    return(
        <main>
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
				rel="stylesheet"></link>
			<section id="deskripsi">
            <img src="/assets/pusat-bantuan/bantuan.png" alt="Pusat Bantuan" style={{ width: '100%' }} />

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
				<div className="container">
					<h3 className="text-center">Pertanyaan yang Sering Ditanyakan</h3>
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="mb-3"
							style={{
								marginLeft: "auto",
								marginRight: "auto",
								maxWidth: "900px",
							}}>
							<hr />
							<div
								onClick={() => toggleQuestion(index)}
								style={{
									borderBottom: "1px solid #ccc",
									paddingBottom: "8px",
									cursor: "pointer",
									color: "grey",
								}}>
								<strong>{faq.question}</strong>
							</div>
							<ul>
								{selectedQuestion === index && (
									<li className="list-unstyled py-2">
										<div style={{ paddingTop: "8px" }}>{faq.answer}</div>
									</li>
								)}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section id="kontak">
				<div className="container py-5">
					<h3 className="text-center mb-4">Hubungi Kami!</h3>
					<div className="d-flex gap-4 align-items-center justify-content-center">
						<div>
							<img
								src="/assets/pusat-bantuan/cta.jpg"
								alt="Hubungi Kami"
								style={{
									borderRadius: "1rem",
									height: "200px",
									width: "400px",
								}}
								className="mb-4"
							/>
						</div>
						<div>
							<a href="">
								<p
									className="px-4 py-2 mb-4 rounded-5"
									style={{ backgroundColor: "var(--white-secondary)" }}>
									<i
										class="fab fa-whatsapp fa-lg pe-2"
										style={{ color: "#1e9c1c" }}></i>
									+62 123-1234-1234
								</p>
							</a>
							<a href="">
								<p
									className="px-4 py-2 mb-4 rounded-5"
									style={{ backgroundColor: "var(--white-secondary)" }}>
									<i
										class="far fa-envelope fa-lg pe-2"
										style={{ color: "#ff0033" }}></i>
									bijakcuan@gmail.com
								</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
    )
}