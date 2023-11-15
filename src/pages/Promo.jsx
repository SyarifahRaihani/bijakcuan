import { Link } from "react-router-dom"
import "./css/promo.css"

export default function Promo() {
  return (
    <main id="promo">
    <div className="container pt-4 pb-5">
        <h2 className="mb-4">Promo</h2>
        <div className="text-center4">
            <div className="row pb-5">
                <div className="col-3">
                    <div className="card ">
                        <img src="/assets/promo/image 2.png" alt="" srcset="" />
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">
                                Diskon Khusus untuk Pelanggan Kartu BCA
                            </p>
                            <p className="text-sm-start pb-4">
                                Dapatkan diskon eksklusif dengan total 30% bagi pengguna
                                bank BCA
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="fw-bold text-sm-start">
                                Kode Promo <br />{" "}
                                <span className="fw-light">BCA30CUAN </span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card ">
                        <img src="/assets/promo/image 3.png" alt="" srcset="" />
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">
                                Bonus E-book "Pengelolaan Keuangan untuk Pemula"
                            </p>
                            <p className="text-sm-start fs-6">
                                Berlangganan paket lifetime onus e-book eksklusif tentang
                                pengelolaan keuangan untuk pemula.
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="fw-bold text-sm-start">
                                Kode Promo <br />{" "}
                                <span className="fw-light">EBOO72341K</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card ">
                        <img src="/assets/promo/image 4.png" alt="" srcset="" />
                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">
                                Diskon Pelatihan Pengelolaan Utang
                            </p>
                            <p className="text-sm-start">
                                {" "}
                                Hemat 25% untuk pelatihan strategi mengelola utang bisnis
                                dengan lebih efektif dan hindari masalah keuangan.
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="fw-bold text-sm-start">
                                Kode Promo <br />{" "}
                                <span className="fw-light">DEBTFREE25</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card ">
                        <img src="/assets/promo/image 5.png" alt="" srcset="" />

                        <div className="card-body">
                            <p className="fw-bold text-sm-start ">
                                Diskon 15% Seminar Keuangan Online
                            </p>
                            <p className="text-sm-start">
                                Nikmati diskon 15% untuk tiket seminar keuangan. Pelajari
                                dari para ahli keuangan tanpa harus keluar rumah.
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="fw-bold text-sm-start">
                                Kode Promo <br />{" "}
                                <span className="fw-light">SEMINAR15OFF</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        id="cta-promo"
        style={{ backgroundImage: "url(/assets/promo/cta.png)" }}>
        <div className="container d-flex justify-content-center gap-5">
            <div className="row">
                <div className="col">
                    <picture>
                        <img src="/assets/promo/image 24.png" alt="" srcset="" />
                    </picture>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h2 className="mb-4">
                        Siapa Berkembang <br /> Bersama Bijak Cuan
                    </h2>
                    <Link href={"/program"} className="btn btn-primary">
                        Gabung Sekarang
                    </Link>
                </div>
            </div>
        </div>
    </div>

    
</main>
)

}
