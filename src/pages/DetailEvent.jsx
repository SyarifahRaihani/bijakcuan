import "./css/event.css"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import eventData from "../data/eventData.json"

export default function DetailEvent() {
	const { id } = useParams()
	const event = eventData.find((event) => event.id === parseInt(id))

	return (
		<main id="detailevent">
			<Helmet>
				<title>{event.title} | Bijakcuan.</title>
			</Helmet>
			<div className="hero">
				<div className="container">
					<div className="row justify-content-end flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg-6">
							<p className="text-white mb-4">
								Tanggal: <b>{event.date}</b>
							</p>
							<h1 className="mb-4 text-white">{event.title}</h1>
							<p className="deskripsi mb-5 text-white">{event.text}</p>
						</div>
						<div className="col-lg-6">
							<img className="img-fluid" src="/assets/event/event2.png" />
						</div>
					</div>
				</div>
			</div>
			<div className="p-5">
				<div className="row justify-content-between gap-5 gap-lg-0">
					<div className="col-lg-7">
						<h6 className="mb-3">{event.title}</h6>
						{event.contents.map((content) => (
							<p key={content}>
								{content}
								<br />
								<br />
							</p>
						))}
						<h6 className="mb-3">Apa yang akan kamu dapatkan? </h6>
						{event.benefits.map((benefit) => (
							<p key={benefit}>
								{benefit}
								<br />
							</p>
						))}
					</div>
					<div className="col-lg-4">
						<div className="card p-4">
							<h6 className="mb-3">Ikuti Event</h6>
							<p className="mb-3">
								Perluas wawasan dan pengalamanmu dengan mengikuti event ini
								sekarang.
							</p>
							<button className="btn btn-primary mb-5">Ikuti Event</button>
							<h6>Jadwal Pelaksanaan</h6>
							<p>Mulai: {event.start}</p>
							<p>Selesai: {event.end}</p>
							<h6 className="mt-5">Lokasi</h6>
							<p>{event.location}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="hero2">
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
		</main>
	)
}
