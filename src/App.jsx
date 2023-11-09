import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Beranda from "./pages/Beranda"

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Beranda />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
