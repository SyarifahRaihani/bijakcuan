import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Beranda from "./pages/Beranda"
import Masuk from "./pages/Masuk"
import Daftar from "./pages/Daftar"

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/masuk" element={<Masuk />} />
				<Route path="/daftar" element={<Daftar />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}
