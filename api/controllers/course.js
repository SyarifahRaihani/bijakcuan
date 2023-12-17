const query = require("../database")

async function getCourseTopic(req, res) {
	try {
		const result = await query("SELECT * FROM course_topic")
		res.json(result)
	} catch (err) {
		console.log(err)
	}
}

async function getCourse(req, res) {
	try {
		const result = await query("SELECT * FROM course_material")
		res.json(result)
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getCourseTopic,
	getCourse,
}
