import "./css/kursus.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { useState, useEffect } from "react"
import { Cookies } from "react-cookie"
import { Modal } from "react-bootstrap"
import Helmet from "react-helmet"
import deskripsiData from "../data/courseDesc.json"

export default function Kursus() {
	const cookies = new Cookies()
	const [courseNow, setCourseNow] = useState(1)
	const [content, setContent] = useState([
		{
			id: 1,
			title: "Pengantar",
		},
	])
	const [courseTopic, setCourseTopic] = useState([])
	const [courseDesc, setCourseDesc] = useState([])
	const [course, setCourse] = useState([])
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [topic, course] = await Promise.all([
					axios.get(`${import.meta.env.VITE_API_URL}/api/v1/course-topic`),
					axios.get(`${import.meta.env.VITE_API_URL}/api/v1/course`),
				])

				setCourseTopic(topic.data)
				setCourse(course.data)
			} catch (error) {
				console.error("Error fetching data:", error)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		const response =
			deskripsiData.find((entry) => entry.id === courseNow)?.deskripsi ||
			"No deskripsi found"
		setCourseDesc(response)
	}, [courseNow])

	const handleClose = () => setShowModal(false)

	const handleCourse = (id) => {
		setCourseNow(id)
		const filteredCourse = course.filter((item) => item.id === id)

		setContent(filteredCourse)
	}

	const handleNext = () => {
		setCourseNow(courseNow + 1)
		handleCourse(courseNow + 1)
	}

	return (
		<main id="kursus">
			<Helmet>
				<title>Kursus | Bijakcuan.</title>
			</Helmet>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<h5>Ayo Gabung Membership Bijakcuan</h5>
					<p className="my-3">
						Silahkan pilih paket Anda sekarang untuk dapatkan segala manfaat
						Bijakcuan untuk sukseskan bisnis Anda.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Link to={"/program"} className="btn btn-primary w-100">
						Gabung Sekarang
					</Link>
				</Modal.Footer>
			</Modal>
			<div className="container pt-4 pb-5">
				<div className="row">
					<div className="col-lg-4 kursus-nav d-flex flex-column gap-4">
						<Link
							to="/profil"
							className="d-flex align-items-center justify-content-start gap-2 mb-4">
							<FontAwesomeIcon
								icon={faArrowLeft}
								className="height-56"></FontAwesomeIcon>
							Kursus Saya
						</Link>
						{courseTopic.map((topic) => (
							<div className="card py-3" key={topic.id}>
								<h6>{topic.title}</h6>
								{course
									.filter((material) => material.topik_id === topic.id)
									.map((material) => (
										<Link
											key={material.id}
											onClick={() => {
												if (cookies.get("auth-trial") && material.id > 5) {
													setShowModal(true)
												} else {
													handleCourse(material.id)
												}
											}}
											className={`nav-link ${
												courseNow === material.id ? "active" : ""
											} ${
												cookies.get("auth-trial") && material.id > 5
													? "trial"
													: ""
											}`}
											aria-current="page">
											{material.title}
										</Link>
									))}
							</div>
						))}
					</div>

					<div className="col-lg-8 kursus-content">
						<div className="card">
							{content[0].video_url ? (
								<iframe
									width="100%"
									height="412"
									className="card-img-top"
									src={content[0].video_url}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen></iframe>
							) : (
								<iframe
									width="100%"
									height="412"
									className="card-img-top"
									src="https://www.youtube.com/embed/z_rxu7LwChE?si=2lTP3RpO_-gUqrh2"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen></iframe>
							)}
							<div className="card-body">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-6">
										<h5 className="card-title">{content[0].title}</h5>
									</div>
									<div className="col-lg">
										{cookies.get("auth-trial") ? (
											<Link
												id="diskusi"
												onClick={() => setShowModal(true)}
												className="btn btn-outline-primary btn-sm mx-2 my-1">
												Grup Diskusi
											</Link>
										) : (
											<Link
												id="diskusi"
												to={"https://t.me/+Ba7dNdoucPViYjQ1"}
												target="_blank"
												className="btn btn-outline-primary btn-sm mx-2 my-1">
												Grup Diskusi
											</Link>
										)}
										<Link
											id="lanjut"
											onClick={handleNext}
											className="btn btn-primary btn-sm mx-2 my-1">
											Selanjutnya
										</Link>
									</div>
								</div>
								<br />
								{courseDesc}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
