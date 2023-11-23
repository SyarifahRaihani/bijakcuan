import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Beranda from "./pages/Beranda"
import Profil from "./pages/profile/Profil"
import Masuk from "./pages/Masuk"
import Daftar from "./pages/Daftar"
import Program from "./pages/Program"
import Checkout from "./pages/Checkout"
import Event from "./pages/Event"
import DetailEvent from "./pages/DetailEvent"
import Promo from "./pages/Promo"
import NotFound from "./pages/NotFound"
import Bantuan from "./pages/Bantuan"
import Kontak from "./pages/Kontak"
import Artikel from "./pages/Artikel"
import DetailArtikel from "./pages/DetailArtikel"
import PembayaranSukses from "./pages/PembayaranSukses"
import Kursus from "./pages/Kursus"

const MainLayout = ({ children }) => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
)

export default function App() {
	return (
		<BrowserRouter>
			<Helmet>
				<title>Bijakcuan | Pelatihan Keuangan untuk Sukses Finansial</title>
			</Helmet>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Beranda />
						</MainLayout>
					}
				/>
				<Route
					path="/program"
					element={
						<MainLayout>
							<Program />
						</MainLayout>
					}
				/>
				<Route
					path="/event"
					element={
						<MainLayout>
							<Event />
						</MainLayout>
					}
				/>
				<Route
					path="/checkout"
					element={
						<MainLayout>
							<Checkout />
						</MainLayout>
					}
				/>
				<Route
					path="/event/:id"
					element={
						<MainLayout>
							<DetailEvent />
						</MainLayout>
					}
				/>
				<Route
					path="/promo"
					element={
						<MainLayout>
							<Promo />
						</MainLayout>
					}
				/>
				<Route
					path="/artikel"
					element={
						<MainLayout>
							<Artikel />
						</MainLayout>
					}
				/>
				<Route
					path="/detail/:id"
					element={
						<MainLayout>
							<DetailArtikel />
						</MainLayout>
					}
				/>
				<Route
					path="*"
					element={
						<MainLayout>
							<NotFound />
						</MainLayout>
					}
				/>
				<Route
					path="/bantuan"
					element={
						<MainLayout>
							<Bantuan />
						</MainLayout>
					}
				/>
				<Route
					path="/kontak"
					element={
						<MainLayout>
							<Kontak />
						</MainLayout>
					}
				/>
				<Route
					path="/profil"
					element={
						<MainLayout>
							<Profil />
						</MainLayout>
					}
				/>
				<Route
					path="/kursus"
					element={
						<MainLayout>
							<Kursus />
						</MainLayout>
					}
				/>
				<Route path="/checkout/sukses" element={<PembayaranSukses />} />
				<Route path="/masuk" element={<Masuk />} />
				<Route path="/daftar" element={<Daftar />} />
			</Routes>
		</BrowserRouter>
	)
}
