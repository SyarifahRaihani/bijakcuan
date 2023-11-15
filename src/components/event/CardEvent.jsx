/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function CardEvent(props) {
  return (
    <div className="card">
      <img src="/assets/event/event.jpg" className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">
          {props.title}
          {/* Webinar &quot;Mengelola Keuangan Bisnis dengan Bijak&quot; */}
        </h6>
        <p className="card-text">
          {props.text}
          {/* Membahas strategi dan praktik terbaik dalam pengelolaan keuangan
          bisnis, dengan pemateri ahli keuangan... */}
        </p>
      </div>
      <div className="card-footer">
        <Link href={"#"} className="btn btn-primary w-100" to="/detailevent">
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
