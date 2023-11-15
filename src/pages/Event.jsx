import "./css/event.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CardEvent from "../components/event/CardEvent";
export default function Event() {
  return (
    <main id="event">
      <Helmet>
        <title>Event | Bijakcuan.</title>
      </Helmet>
      <div className="hero">
        <div className="container p-5">
          <div className="row justify-content-end flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4 text-white">
                Webinar &quot;Dasar-dasar Pengelolaan Keuangan&quot;
              </h3>
              <p className="deskripsi mb-5 text-white">
                Acara ini cocok untuk pemilik bisnis, wirausahawan, dan siapa
                pun yang ingin meningkatkan kemampuan mereka dalam mengelola
                keuangan bisnis dengan efektif.
              </p>
              <button className="btn btn-primary">Lihat Detail</button>
            </div>
            <div className="col-lg-6 ">
              <img className="img-fluid" src="/assets/event/event2.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-5">
        <h2 className="mb-4">Event</h2>
        <div className="mb-4">
          <div className="row">
            <div className="col">
              <CardEvent
                title='Webinar "Mengelola Keuangan Bisnis dengan Bijak"'
                text="Membahas strategi dan praktik terbaik dalam pengelolaan keuangan
                bisnis, dengan pemateri ahli keuangan..."
              />
            </div>

            <div className="col">
              <CardEvent
                title="Kompetisi Rencana Bisnis"
                text="Kompetisi di mana pebisnis dapat menyusun rencana bisnis
                    kreatif dan berpotensi mendapatkan pendanaan."
              />
            </div>

            <div className="col">
              <CardEvent
                title='  Webinar "Dasar-dasar Pengelolaan Keuangan Bisnis "'
                text=" Webinar ini akan membahas konsep dasar pengelolaan keuangan
                bisnis untuk pebisnis usaha menengah..."
              />
            </div>

            <div className="col">
              <CardEvent
                title=" Laporan Tren Keuangan Bisnis 2023 "
                text=" Peluncuran laporan tahunan yang menganalisis tren keuangan
                terbaru yang memengaruhi pebisnis..."
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col">
              <CardEvent
                title=' Seminar "Mengelola Keuangan di Era Digital "'
                text=" Seminar untuk membahas teknologi terkini yang dapat membantu
                dalam pengelolaan keuangan bisnis."
              />
            </div>

            <div className="col">
              <CardEvent
                title=" Laporan Tren Teknologi Finansial"
                text=" Peluncuran laporan tahunan yang menganalisis tren teknologi
                finansial yang relevan untuk bisnis menengah."
              />
            </div>

            <div className="col">
              <CardEvent
                title=' Seminar "Strategi Keuangan untuk Kewirausahaan "'
                text=" Seminar tentang strategi keuangan khusus untuk pemilik
                bisnis kecil dan menengah."
              />
            </div>

            <div className="col">
              <CardEvent
                title=' Sesi "Membangun Dana Darurat "'
                text=" Sesi pemahaman dan perencanaan tentang pentingnya memiliki
                dana darurat untuk bisnis."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero2">
        <div className="container text-center ">
          <h3 className="text-white px-5">
            Buka Kesuksesan Finansial Anda Sekarang Bersama Bijakcuan
          </h3>
          <Link to={"/program"} className="btn btn-primary">
            Gabung Sekarang
          </Link>
        </div>
      </div>
    </main>
  );
}
