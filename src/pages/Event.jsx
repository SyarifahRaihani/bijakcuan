import "./css/event.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CardEvent from "../components/event/CardEvent";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/events`)
      .then(res => {
        setEvents(res.data);
      })
      .catch(error => {
        console.error('Error fetching event list:', error);
      });
  }, []);

  return (
    <main id="event">
      <Helmet>
        <title>Event | Bijakcuan.</title>
      </Helmet>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4 text-white">
                Webinar &quot;Dasar-dasar Pengelolaan Keuangan&quot;
              </h1>
              <p className="deskripsi mb-5 text-white">
                Acara ini cocok untuk pemilik bisnis, wirausahawan, dan siapa
                pun yang ingin meningkatkan kemampuan mereka dalam mengelola
                keuangan bisnis dengan efektif.
              </p>
              <Link className="btn btn-primary" to={`/event/3`}>
                Lihat Detail
              </Link>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid rounded-5" src="/assets/event/event3.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <h2 className="mb-4">Event Lain</h2>
        <div className="row">
          {events.map((event) => (
            <div className="col-lg-3 col-md-6 mb-4" key={event.id}>
              <CardEvent
                id={event.id}
                title={event.nama}
                text={event.tentang}
                image={event.image}
              />
            </div>
          ))}
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
  );
}
