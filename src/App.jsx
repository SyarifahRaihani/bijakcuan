import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Beranda from "./pages/Beranda"
import Masuk from "./pages/Masuk"
import Daftar from "./pages/Daftar"
import Program from "./pages/Program"
import Checkout from "./pages/Checkout"
import Event from "./pages/Event"
import DetailEvent from "./pages/DetailEvent"
import Promo from "./pages/Promo"
import NotFound from "./pages/NotFound"

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
				<Route path="/event" element={<Event />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/event/detail" element={<DetailEvent />} />
				<Route path="/promo" element={<Promo />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
