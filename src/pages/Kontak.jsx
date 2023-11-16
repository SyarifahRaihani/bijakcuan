import { Link } from "react-router-dom"

export default function Kontak(){
    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container mt-5" style={{ width: '30rem' }}>
                            <img className="" src="/assets/kontak/kontak.png" alt="Koplak" />
                        </div>
                    </div>
                    <div className="col">
            <form>
                <div className="container">
                    <h3 className="mt-5 mb-3" id="kontak">
                        Kirim Pesan
                    </h3>

              <div className="row pb-3 mt-4 mb-4">
                <div className="col-md-6">
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Nama" />
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Email" />
                </div>

                <div className="col-md-6">
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Nama" />
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Email" />
                </div>
                
                <div className="col-md-12">
                  <textarea className="form-control form-control-lg" name="" id="" cols="30" rows="5" ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </main>
    )
}