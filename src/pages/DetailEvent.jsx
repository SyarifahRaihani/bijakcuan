import "./css/event.css"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { SITE_URL } from "../utils/env"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DetailEvent() {
	const { id } = useParams()
	const [event, setEvent] = useState([]);

	useEffect(() => {
		axios.get(`${SITE_URL}/api/events/${id}`)
			.then(res => {
				setEvent(res.data);
			})
			.catch(error => {
				console.error('Error fetching event:', error);
			});
	}, [id]);

	return (
		<main id="detailevent">
			<Helmet>
				<title>Detail Event | Bijakcuan.</title>
				{/* <title>{event.nama} | Bijakcuan.</title> */}
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
						<p style={{ whiteSpace: 'pre-line' }}>{event.deskripsi}</p>
						<br />
						<h6 className="mb-3">Apa yang akan kamu dapatkan? </h6>
						<p style={{ whiteSpace: 'pre-line' }}>{event.benefit}</p>
					</div>
					<div className="col-lg-4">
						<div className="card p-4">
							<h6 className="mb-3">Ikuti Event</h6>
							<p className="mb-3">
								Perluas wawasan dan pengalamanmu dengan mengikuti event ini
								sekarang.
							</p>
							<Link to={event.link} className="btn btn-primary mb-5">Ikuti Event</Link>
							<h6>Jadwal Pelaksanaan</h6>
							<p>Mulai: {event.formatted_waktu_mulai}</p>
							<p>Selesai: {event.formatted_waktu_selesai}</p>
							<h6 className="mt-5">Lokasi</h6>
							<p>{event.lokasi}</p>
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
