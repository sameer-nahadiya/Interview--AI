const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/Interview.model")
async function generateInterViewReportController(req, res){
    // const resumeFile = req.file

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body

    let interviewReportByAi
    try {
        interviewReportByAi = await generateInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        })
    } catch (error) {
        return res.status(503).json({
            message: "AI model unavailable. Please try again later.",
            error: error.message
        })
    }

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    return res.status(201).json({
        message: "Interview report generated successfully",
        data: interviewReport,
        ai: interviewReportByAi
    })
}

module.exports = { generateInterViewReportController }