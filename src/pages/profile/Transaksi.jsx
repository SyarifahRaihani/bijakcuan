import "../css/transaksi.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Cookies } from "react-cookie"
import { jwtDecode } from "jwt-decode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export default function Transaksi() {
	const cookies = new Cookies()
	const [transaksiList, setTransaksiList] = useState([])

	useEffect(() => {
		const getTransaksi = async () => {
			try {
				const user = jwtDecode(cookies.get("auth-login"))
				const id = user.id

				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/v1/getTransaksi/${id}`
				)

				const transaksiArray = Array.isArray(response.data)
					? response.data
					: [response.data]

				setTransaksiList(transaksiArray)
			} catch (error) {
				console.error(error)
			}
		}
		getTransaksi()
	}, [])

	const getFormattedDate = (datetimeString) => {
		const datetime = new Date(datetimeString)
		const day = datetime.getDate()
		const monthNames = [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		]
		const month = monthNames[datetime.getMonth()]
		const year = datetime.getFullYear()
		return `${day < 10 ? "0" : ""}${day} ${month} ${year}`
	}

	return (
		<section id="transaksi">
			{transaksiList.length === 0 ? (
				<div className="card container">
					<div className="card-body text-center">
						<FontAwesomeIcon
							icon={faShoppingCart}
							className="height-56"></FontAwesomeIcon>
						<p>Tidak ada Transaksi</p>
					</div>
				</div>
			) : (
				transaksiList.map((transaksi, index) => (
					<div key={index} className="card container mb-2">
						<div className="card-body">
							<button
								type="button"
								className={`btn ${
									transaksi.status_order === "settlement"
										? "btn-success"
										: "btn-danger"
								} rounded-5 disabled`}>
								{transaksi.status_order === "settlement" ? "Berhasil" : "Gagal"}
							</button>

							<div className="container mt-3">
								<div className="d-flex justify-content-between w-100">
									<h4 className="text-left">Membership {transaksi.paket}</h4>
									<p className="text-right">Order ID {transaksi.order_id}</p>
								</div>

								<div className="d-flex justify-content-between w-100">
									<p className="text-left">
										Total pembayaran:{" "}
										<b>Rp {transaksi.total.toLocaleString("id-ID")}</b>
									</p>

									<p className="text-right">
										{getFormattedDate(transaksi.created_at)}
									</p>
								</div>
							</div>
						</div>
					</div>
				))
			)}
		</section>
	)
}
