import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Beranda from "./pages/Beranda";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import Program from "./pages/Program";
import Checkout from "./pages/Checkout";
import Event from "./pages/Event";
import DetailEvent from "./pages/DetailEvent";
import Promo from "./pages/Promo";
import NotFound from "./pages/NotFound";
import Bantuan from "./pages/Bantuan";
import Kontak from "./pages/Kontak";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";

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
        <Route path="/event/:id" element={<DetailEvent />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/detail/:id" element={<DetailArtikel />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
