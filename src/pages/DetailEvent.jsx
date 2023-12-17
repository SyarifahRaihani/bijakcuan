import "./css/event.css"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Cookies } from "react-cookie"
import axios from "axios"
import Cta from "../components/cta"

export default function DetailEvent() {
	const cookies = new Cookies()
	const { id } = useParams()
	const [event, setEvent] = useState([])

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/api/v1/events/${id}`)
			.then((res) => {
				setEvent(res.data)
			})
			.catch((error) => {
				console.error("Error fetching event:", error)
			})
	}, [id])

	return (
		<main id="detailevent">
			<Helmet>
				<title>Event | Bijakcuan.</title>
			</Helmet>
			<div className="hero">
				<div className="container">
					<div className="row justify-content-end flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg-6">
							<p className="text-white mb-4">
								Tanggal: <b>{event.formatted_waktu_mulai}</b>
							</p>
							<h1 className="mb-4 text-white">{event.nama}</h1>
							<p className="deskripsi mb-5 text-white">{event.tentang}</p>
						</div>
						<div className="col-lg-6">
							<img className="img-fluid rounded-5" src={event.image} />
						</div>
					</div>
				</div>
			</div>
			<div className="p-5">
				<div className="row justify-content-between gap-5 gap-lg-0">
					<div className="col-lg-7">
						<h6 className="mb-3">{event.nama}</h6>
						<p style={{ whiteSpace: "pre-line" }}>{event.deskripsi}</p>
						<br />
						<h6 className="mb-3">Apa yang akan kamu dapatkan? </h6>
						<p style={{ whiteSpace: "pre-line" }}>{event.benefit}</p>
					</div>
					<div className="col-lg-4">
						{cookies.get("auth-order") ? (
							<div className="card p-4">
								<h6 className="mb-3">Ikuti Event</h6>
								<p className="mb-3">
									Perluas wawasan dan pengalamanmu dengan mengikuti event ini
									sekarang.
								</p>
								<Link to={event.link} className="btn btn-primary mb-5">
									Ikuti Event
								</Link>
								<h6>Jadwal Pelaksanaan</h6>
								<p>Mulai: {event.formatted_waktu_mulai}</p>
								<p>Selesai: {event.formatted_waktu_selesai}</p>
								<h6 className="mt-5">Lokasi</h6>
								<p>{event.lokasi}</p>
							</div>
						) : cookies.get("auth-login") ? (
							<div className="card p-4">
								<h6 className="mb-3">Ikuti Event</h6>
								<p className="mb-3">
									Silahkan gabung menjadi membership Bijakcuan untuk mendapatkan
									akses pada event-event menarik dari kami.
								</p>
								<Link to="/program" className="btn btn-primary mb-5">
									Gabung Sekarang
								</Link>
								<h6>Jadwal Pelaksanaan</h6>
								<p>Mulai: {event.formatted_waktu_mulai}</p>
								<p>Selesai: {event.formatted_waktu_selesai}</p>
								<h6 className="mt-5">Lokasi</h6>
								<p>{event.lokasi}</p>
							</div>
						) : (
							<div className="card p-4">
								<h6 className="mb-3">Ikuti Event</h6>
								<p className="mb-3">
									Silahkan masuk dan gabung menjadi membership Bijakcuan untuk
									mendapatkan akses pada event-event menarik dari kami.
								</p>
								<Link to="/masuk" className="btn btn-primary mb-5">
									Masuk Sekarang
								</Link>
								<h6>Jadwal Pelaksanaan</h6>
								<p>Mulai: {event.formatted_waktu_mulai}</p>
								<p>Selesai: {event.formatted_waktu_selesai}</p>
								<h6 className="mt-5">Lokasi</h6>
								<p>{event.lokasi}</p>
							</div>
						)}
					</div>
				</div>
			</div>
			{!cookies.get("auth-order") && <Cta />}
		</main>
	)
}
