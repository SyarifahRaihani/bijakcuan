import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Beranda from "./pages/Beranda"
import Masuk from "./pages/Masuk"
import Daftar from "./pages/Daftar"
import Program from "./pages/Program"
import Checkout from "./pages/Checkout"

export default function App() {
	return (
		<BrowserRouter>
			<Helmet>
				<title>Bijakcuan.</title>
			</Helmet>
			<Navbar />
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/masuk" element={<Masuk />} />
				<Route path="/daftar" element={<Daftar />} />
				<Route path="/program" element={<Program />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
