import { Link } from "react-router-dom"


export default function KursusSaya() {
  return (
    <main id="kursusSaya">
      <div className="card container">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h5>Selamat Belajar</h5>
            </div>
            <div className="col-md-12">
              <p>
                Silahkan mempelajari materi kelas yang telah kami desain dengan
                baik untuk mencapai goals Anda
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Link to={"/kursus"} className="btn btn-primary btn-sm">
                  Mulai Belajar
        </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
