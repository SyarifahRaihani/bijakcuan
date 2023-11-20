import { Link } from "react-router-dom"
import "./css/promo.css"
import promoData from "../data/promoData.json"

export default function Promo() {
  return (
    <main id="promo">
    <div className="container pt-4 pb-5">
        <h2 className="mb-4">Promo</h2>
        <div className="text-center4">
            <div className="row">
                {promoData.map((promo) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={promo.id}>
                    <div className="card ">
                        <img src={promo.gambar} className="card-img-top" alt={`Promo ${promo.id}`}  />
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">
                                {promo.bold}
                            </p>
                            <p className="text-sm-start pb-4">
                                {promo.text}
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="fw-bold text-sm-start">
                                Kode Promo <br />{" "}
                                <span className="fw-light">{promo.kode} </span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
                ))}
                
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

)}
