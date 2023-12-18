import { jwtDecode } from "jwt-decode"
import { Cookies } from "react-cookie"
import { useState } from "react"
import { useNavigate } from "react-router-dom/dist"
import axios from "axios"

export default function Pengaturan() {
	const cookies = new Cookies()
	const navigate = useNavigate()
	const user = jwtDecode(cookies.get("auth-login"))

	const [values, setValues] = useState({
		username: user.username,
		name: user.name,
		email: user.email,
		phone: user.phone,
		user: user
	})

	const [failed, setFailed] = useState("")

	const [isFormChanged, setIsFormChanged] = useState(false);

	const handleInput = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))

		setIsFormChanged(true);
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setFailed("")
		if (isFormChanged) {
			axios
				.post(`${import.meta.env.VITE_API_URL}/api/v1/edit/`, values)
				.then((res) => {
					if (res.data.failed) {
						const failed = res.data.failed
						setFailed(failed)
						return
					} else {
						cookies.remove("auth-login", { path: "/" })
						cookies.remove("auth-order", { path: "/" })
	
						const refreshValue = {
							id: user.id
						}
	
						axios
						.post(`${import.meta.env.VITE_API_URL}/api/v1/refreshToken/`, refreshValue)
						.then((res) => {
							const token = res.data.token
							cookies.set("auth-login", token, { secure: true })
							if (res.data.order) {
								const order = res.data.order
								cookies.set("auth-order", order, { secure: true })
							}
	
							navigate("/profil")
							window.location.reload()
						})
						.catch((error) => {
							console.error("Error:", error)
						})
					}
				})
				.catch((error) => {
					console.error("Error:", error)
				})
		} else {
			console.log("No changes made.");
		}
	}

	return (
		<section id="pengaturan">
			<div className="card" style={{ borderRadius: "10px" }}>
				<div className="card-body">
					{failed && (
						<div id="wrong" className="alert alert-danger mb-4">
							<p>{failed}</p>
						</div>
					)}
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
							<form onSubmit={handleSubmit}>
								<label className="labels">Nama (Maks. 50 karakter)</label>
								<input
									onChange={handleInput}
									type="text"
									name="name"
									id="name"
									className="form-control mb-3"
									defaultValue={user.name}
									style={{ backgroundColor: "#DCDCDC" }}
								/>
								<label className="labels">Alamat Email</label>
								<input
									onChange={handleInput}
									type="text"
									name="email"
									id="email"
									className="form-control mb-3"
									defaultValue={user.email}
									style={{ backgroundColor: "#DCDCDC" }}
								/>
								<label className="labels">Username</label>
								<input
									onChange={handleInput}
									type="text"
									name="username"
									id="username"
									className="form-control mb-3"
									defaultValue={user.username}
									style={{ backgroundColor: "#DCDCDC" }}
								/>
								<label className="labels">No Telepon</label>
								<input
									onChange={handleInput}
									type="text"
									name="phone"
									id="phone"
									className="form-control mb-3"
									defaultValue={user.phone}
									style={{ backgroundColor: "#DCDCDC" }}
								/>
								<button
									type="submit"
									disabled={!isFormChanged}
									className="btn btn-primary mt-3 w-100">
									Simpan Perubahan
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
