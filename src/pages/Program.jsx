import "./css/program.css"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faListCheck,
	faCommentDots,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import NavProgram from "../components/program/NavProgram"
import CardProgram from "../components/program/CardProgram"

export default function Program() {
	return (
		<main id="program">
			<Helmet>
				<title>Program | Bijakcuan.</title>
			</Helmet>
			<section
				id="hero"
				style={{ backgroundImage: "url(/assets/program/hero-bg.png)" }}>
				<div className="container d-flex align-items-center justify-content-center">
					<div className="d-block text-center">
						<h1>Pelatihan Keuangan Untuk Sukses Finansial</h1>
						<p>Majukan Bisnismu Dengan Pengelolaan Keuangan Yang Baik</p>
						<Link to={"#content"} className="btn btn-primary">
							Gabung Sekarang
						</Link>
					</div>
				</div>
			</section>
			<section id="program-benefit">
				<div className="container">
					<div className="row gap-5">
						<div className="col d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faListCheck} />
							<p>
								Materi Dari <b>Para Expert</b> Dibidang Keuangan
							</p>
						</div>
						<div className="col d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCommentDots} />
							<p>
								Konsultasi Kendala Keuanganmu <b>Bersama Ahli</b>
							</p>
						</div>
						<div className="col d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>
								Data Yang Aktual Berdasarkan <b>Riset Mendalam</b>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="content">
				<div className="container">
					<div className="row gap-5">
						<div className="col">
							<NavProgram />
						</div>
						<div className="col-lg-5">
							<CardProgram />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
