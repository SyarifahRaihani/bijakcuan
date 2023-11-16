import "./css/artikel.css";
import { Link } from 'react-router-dom';
import artikelData from "../data/artikelData.json"

export default function Artikel() {
  return (
    <main id="artikel">
			<div className="hero">
				<div className="container">
					<div className="row flex-column-reverse flex-lg-row gap-5 gap-lg-0 justify-content-between">
						<div className="col-lg-5">
							<h1 className="mb-4">
								Kiat Meningkatkan Pendapatan Bisnis Tanpa Menambah Utang
							</h1>
							<p className="mb-5">
                            Pendapatan adalah salah satu aspek kunci dalam kesuksesan bisnis. Meskipun seringkali pemilik bisnis menghadapi kebutuhan untuk mendapatkan pendanaan tambahan...
							</p>
							<button className="btn btn-primary">Lanjut Baca</button>
						</div>
						<div className="col-lg-7">
							<img style={{borderRadius:"25px", width: "630px", height: "350px"}} src="/assets/artikel/artikel-5.jpg" />
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5 pb-5">
                <h2 className="mb-4">Artikel Terbaru</h2>
                <div className="row">
                {artikelData.map((artikel) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={artikel.id}>
                    <div className="card">
                        <img src={artikel.gambar} className="card-img-top" alt={`Artikel ${artikel.id}`} />
                        <div className="card-body">
                        <h6>{artikel.judul}</h6>
                        <p className="card-text">{artikel.deskripsi}</p>
                        </div>
                        <div className="card-footer">
                        <Link to={`/detail/${artikel.id}`} className="btn btn-primary w-100">
                            Lihat Detail
                        </Link>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
		</main>
  )
}
