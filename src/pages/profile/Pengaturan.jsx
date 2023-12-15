import { jwtDecode } from "jwt-decode"
import { Cookies } from "react-cookie"
import { useState } from "react"
// import axios from "axios"

export default function Pengaturan() {
	const cookies = new Cookies()
	const user = jwtDecode(cookies.get("auth-login"))
	const [values, setValues] = useState({
		username: "",
		name: "",
		email: "",
		phone: "",
		password: "",
	})

	const handleInput = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	// const handleSubmit = async (event) => {
	// 	event.preventDefault()
	// 	axios
	// 		.post(`${import.meta.env.VITE_API_URL}/api/v1/daftar/`, values)
	// 		.then((res) => {
	// 			if (res.data.failed) {
	// 				return
	// 			} else {
	// 				window.location.reload()
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error:", error)
	// 		})
	// }

	return (
		<section id="pengaturan">
			<div className="card" style={{ borderRadius: "10px" }}>
				<div className="card-body">
					{/* <form onSubmit={handleSubmit}> */}
					<img
						src="assets/profil/user.png"
						alt="avatar"
						className="rounded-circle img-fluid mt-3 mx-4"
						style={{ width: "70px" }}
					/>
					<button
						type="button"
						className="btn btn-outline-dark btn-sm mt-3"
						style={{ borderRadius: "10px" }}>
						Upload Foto
					</button>
					<div className="row mt-4 mx-3">
						<div className="col-md-12 my-3">
							<label className="labels">Nama (Maks. 50 karakter)</label>
							<input
								onChange={handleInput}
								type="text"
								className="form-control"
								placeholder={user.name}
								style={{ backgroundColor: "#DCDCDC" }}
							/>
						</div>
						<div className="col-md-12">
							<label className="labels">Alamat Email</label>
							<input
								onChange={handleInput}
								type="text"
								className="form-control"
								placeholder={user.email}
								style={{ backgroundColor: "#DCDCDC" }}
							/>
						</div>
						<div className="col-md-12 my-3">
							<label className="labels">Username</label>
							<input
								onChange={handleInput}
								type="text"
								className="form-control"
								placeholder={user.username}
								style={{ backgroundColor: "#DCDCDC" }}
							/>
						</div>
						<div className="col-md-12 mb-4">
							<label className="labels">No Telepon</label>
							<input
								onChange={handleInput}
								type="text"
								className="form-control"
								placeholder={user.phone}
								style={{ backgroundColor: "#DCDCDC" }}
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary btn-lg btn-block btn-sm mx-3 w-100">
							Simpan Profil Anda
						</button>
					</div>
					{/* </form> */}
				</div>
			</div>
		</section>
	)
}
