const express = require("express")
const app = express()
const { getCourseTopic, getCourse } = require("../controllers/course")

app.get("/course-topic", getCourseTopic)
app.get("/course", getCourse)

module.exports = app
