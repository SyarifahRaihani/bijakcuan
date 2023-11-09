import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faTwitter,
	faInstagram,
	faWhatsapp,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
	return (
		<footer className="border-top">
			<div className="container footer-content">
				<div className="row gap-5">
					<div className="col-lg-2">
						<h4>
							<a className="fw-bold" href={"/"}>
								Bijakcuan.
							</a>
						</h4>
						<p>Pelatihan Keuangan untuk Sukses Finansial</p>
					</div>
					<div className="col-lg-2">
						<h6 className="">Halaman</h6>
						<div className="d-flex flex-column gap-2">
							<Link href={"/program"}>Program</Link>
							<Link href={"/promo"}>Promo</Link>
						</div>
					</div>
					<div className="col-lg-2">
						<h6>Komunitas</h6>
						<div className="d-flex flex-column gap-2">
							<Link href={"/event"}>Event</Link>
							<Link href={"/artikel"}>Artikel</Link>
						</div>
					</div>
					<div className="col-lg-2">
						<h6>Hubungi kami</h6>
						<div className="d-flex flex-column gap-2">
							<Link href={"/bantuan"}>Pusat Bantuan</Link>
							<Link href={"/bantuan#kontak"}>Kontak</Link>
						</div>
					</div>

					<div className="col-lg-2">
						<h6>Media Sosial</h6>
						<div className="d-flex flex-row gap-2">
							<Link href={"#"}>
								<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
							</Link>
							<Link href={"#"}>
								<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
							</Link>
							<Link href={"#"}>
								<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
							</Link>
							<Link href={"#"}>
								<FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="border-top">
				<div className="container">
					<p className="pt-4 pb-2">
						© 2023 <b>Bijak Cuan</b>. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
