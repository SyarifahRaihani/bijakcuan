import axios from "axios";
import Cta from "../components/cta"
import "./css/promo.css";
import { SITE_URL } from "../utils/env"
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Promo() {
  const [copySuccess, setCopySuccess] = useState(null);

  const copyToClipboard = (text, promoId) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(promoId);
  };

  const getPromo = async () => {
    const response = await axios.get(`${SITE_URL}/api/promo`)
    setPromo(response.data);
  }

    const [promo, setPromo] = useState([]);

    useEffect(() => {
      getPromo();
    }, []);

    

  return (
    <main id="promo">
      <Helmet>
        <title>Promo | Bijakcuan.</title>
      </Helmet>
      <div className="container pt-4 pb-5">
        <h2 className="mb-4">Promo</h2>
        <div className="text-center4">
          <div className="row">
            {promo.map((promo) => (
              <div className="col-lg-3 col-md-6 mb-4" key={promo.id}>
                <div className="card ">
                  <img
                    src={promo.image}
                    className="card-img-top"
                    alt={`Promo ${promo.id}`}
                  />
                  <div className="card-body">
                    <p className="fw-bold text-sm-start pb-3">{promo.nama_promo}</p>
                    <p className="text-sm-start pb-4">{promo.deskripsi_promo}</p>
                  </div>
                  <div className="card-footer">
                    <p className="fw-bold text-sm-start">
                      Kode Promo <br />{" "}
                      <span
                        className="fw-light"
                        style={{ cursor: "pointer" }}
                        onClick={() => copyToClipboard(promo.kode_promo, promo.id)}
                      >
                        {promo.kode_promo}{" "}
                        {copySuccess === promo.id && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="text-black"
                          />
                        )}
                        {copySuccess !== promo.id && (
                          <FontAwesomeIcon
                            icon={faCopy}
                            className="text-black"
                          />
                        )}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </main>
  );
}
