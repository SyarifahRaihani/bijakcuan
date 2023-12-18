import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Cookies } from "react-cookie";
import articlesData from "../data/detailArtikel.json";
import Cta from "../components/cta";
import axios from "axios"
import "./css/detailArtikel.css";

const DetailArtikel = () => {
	const cookies = new Cookies()
	const { id } = useParams()
	const [artikel, setArtikel] = useState({}) //db
	const [article, setArticle] = useState({}) //json
	const [articlesToShow, setArticlesToShow] = useState([])

	useEffect(() => {
		const getDetailArtikel = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/v1/artikel/${id}`
				)
				console.log("API Response:", response.data)
				console.log("Judul Artikel:", response.data.judul)
				console.log("Gambar Artikel:", response.data.image)
				setArtikel(response.data)
			} catch (error) {
				console.error(error)
			}
		}

		const getDetailJson = () => {
			const article = articlesData.find((article) => article.id === parseInt(id));
			setArticle(article || {});
		};

		const getArticlesToShow = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/v1/artikel`
				)
				console.log("API Response for Articles:", response.data)
				setArticlesToShow(response.data)
			} catch (error) {
				console.error(error)
			}
		}

		getDetailArtikel()
		getArticlesToShow()
		getDetailJson()
	}, [id])

	const filteredArticlesToShow = articlesToShow.filter(
		(article) => article.id !== parseInt(id)
	)

  return (
    <main id="detailArtikel">
      <Helmet>
        <title>{`${artikel.judul || "Bijakcuan."}`}</title>
      </Helmet>
      <section className="hero-section">
        <div className="container">
          <Link to="/artikel" className="d-flex align-items-center justify-content-start gap-2 mb-4">
            <FontAwesomeIcon icon={faArrowLeft} className="height-56" />
            Kembali
          </Link>
          <h1>{artikel.judul}</h1>
        </div>
      </section>

      <section className="detail-section">
  <div className="py-5">
    <img src={artikel.image} className="rounded mx-auto d-block" alt={`Artikel ${artikel.id}`} />
  </div>

  {article.content && (
    <div className="id-artikel">
		{article.judul && (
		<div className="pb-3">
			<h4>{article.judul}</h4>
		</div>
)}

		{article.deskripsi && (
		<div className="pb-3">
			<p>{article.deskripsi}</p>
		</div>
)}
      <ol>
        {article.content.map((section, index) => (
          <li key={index}>
              <h5>{section.heading}</h5>
              <p className="pb-3">{section.text}</p>
          </li>
        ))}
      </ol>
	{article.kesimpulan && (
    <div className="conclusion">
      <p>{article.kesimpulan}</p>
    </div>
  )}
    </div>
  )}

</section>
      <section className="article-cards-section">
				<div className="container pt-5 pb-5">
					<h2 className="pb-1">Artikel Lainnya</h2>
					<div className="row">
						{filteredArticlesToShow.map((article) => (
							<div key={article.id} className="col-lg-3 col-md-6 mb-4">
								<div className="card">
									<img
										src={article.image}
										className="card-img-top"
										alt={`Artikel ${article.id}`}
									/>
									<div className="card-body">
										<h6>{article.judul}</h6>
									</div>
									<div className="card-footer text-center">
										<Link
											to={`/artikel/${article.id}`}
											className="btn btn-primary w-100">
											Baca
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{!cookies.get("auth-order") && <Cta />}
    </main>
  );
};

export default DetailArtikel;
