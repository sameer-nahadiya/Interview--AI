const express = require("express")
const authMiddelware = require("../middelwares/auth.middelware")
const interviewController = require("../controllers/interview.controllers")
const upload = require("../middelwares/file.middelware")

const interviewRouter = express.Router()



/**
 * @route POST /api/interview
 * @description generate new interview report on the basis of user self description,resume pdf and job description.
 * @access Private
 */

interviewRouter.post("/", authMiddelware.authUser,upload.single("resume"), interviewController.generateInterViewReportController)
    


module.exports = interviewRouter