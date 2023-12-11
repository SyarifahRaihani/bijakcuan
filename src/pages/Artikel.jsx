import "./css/artikel.css"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useState, useEffect } from "react"
import Cta from "../components/cta"
import axios from "axios"

export default function Artikel() {
	const getArtikel = async () => {
		const response = await axios.get(
			`${import.meta.env.VITE_API_URL}/api/artikel`
		)
		setArtikel(response.data)
	}

	const [artikel, setArtikel] = useState([])

	useEffect(() => {
		getArtikel()
	}, [])

	return (
		<main id="artikel">
			<Helmet>
				<title>Artikel | Bijakcuan.</title>
			</Helmet>

			<div
				id="articleCarousel"
				className="carousel slide"
				data-bs-ride="carousel">
				<div className="carousel-inner">
					{artikel.map((article, index) => (
						<div
							key={article.id}
							className={`carousel-item ${index === 0 ? "active" : ""}`}>
							<div className="hero">
								<div className="container">
									<div className="row justify-content-between flex-column-reverse flex-lg-row gap-5 gap-lg-0">
										<div className="deskripsi col-lg-6">
											<h1 className="mb-4 text-white">{article.judul}</h1>
											<p
												className="deskripsi mb-5 text-white"
												style={{ maxWidth: "600px" }}>
												{article.deskripsi}
											</p>
											<a
												href={`/detail/${article.id}`}
												className="btn btn-primary">
												Lanjut Baca
											</a>
										</div>
										<div className="col-lg-6">
											<img
												style={{
													borderRadius: "25px",
													width: "630px",
													height: "300px",
												}}
												className="img-fluid"
												src={article.image}
												alt={`Artikel ${article.id}`}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#articleCarousel"
					data-bs-slide="prev"
					style={{ left: "-70px" }}>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#articleCarousel"
					data-bs-slide="next"
					style={{ right: "-70px" }}>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="container pt-5 pb-5">
				<h2 className="mb-4">Artikel Terbaru</h2>
				<div className="row">
					{artikel.map((artikel) => (
						<div className="col-lg-3 col-md-6 mb-4" key={artikel.id}>
							<div className="card">
								<img
									src={artikel.image}
									className="card-img-top"
									alt={`Artikel ${artikel.id}`}
								/>
								<div className="card-body">
									<h6>{artikel.judul}</h6>
									<p className="card-text">{artikel.deskripsi}</p>
								</div>
								<div className="card-footer">
									<Link
										to={`/detail/${artikel.id}`}
										className="btn btn-primary card-button w-100">
										Lihat Detail
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Cta />
		</main>
	)
}
