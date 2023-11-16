import { Link } from "react-router-dom"
import React from "react"

export default function Kontak(){
    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container my-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img className="" src="/assets/kontak/kontak.png" alt="Koplak"  style={{ width: '500px',}} />
                        </div>
                    </div>
                    <div className="col">
            <form>
                <div className="container">
                    <h1 className="mt-5" id="kontak">
                        Kirim Pesan
                    </h1>

              <div className="row pb-3 mt-5 ">
                <div className="col-md-6">
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Nama" />
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="No. Telephone" />
                </div>

                <div className="col-md-6">
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Email" />
                  <input className="form-control form-control-lg mb-3" type="text" placeholder="Status" />
                </div>
                
                <div className="col-md-12">
                  <textarea className="form-control form-control-lg" name="" id="" cols="30" rows="5" placeholder="Pesan..."></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary mb-3">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </main>
    )
}