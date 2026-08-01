const mongoose = require("mongoose");


const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        require: [true, "Technical question is required"]
    },
    intention:{
        type: String,
        require: [true, "Intention is required"]
    },
    answer:{
        type: String,
        require: [true, "Answer is required"]
    }   
},{
    _id: false
})

const behaviouralQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        require: [true, "Technical question is required"]
    },
    intention:{
        type: String,
        require: [true, "Intention is required"]
    },
    answer:{
        type: String,
        require: [true, "Answer is required"]
    }
},{
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type: String,
        require: [true, "Skill is required"]
    },
    severity:{
        type: String,
        enum: ["low", "medium", "high"],
        require: [true, "Severity is required"]
    }
},{
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        require: [ true, "Day is required"]
    },
    focus: {
        type: String,
        require: [true, "Focus is required"]
    },
    task: [ {
        type: String,
        require: [true, " Task is required"]
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type: String,
        require: [true, "Job Description is Required"]
    },
    resume: {
        type: String,
    },
    SelfDescription:{
        type:String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },

    technicalQuestion: [ technicalQuestionSchema],
    behavioralQuestion: [ behaviouralQuestionSchema],
    skillGaps: [ skillGapSchema],
    prepartionSchema: [ preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title:{
        type: String,
        require: [true, "Job title is required"]
    }
},{
    timestamps: true
})


const interviewReportModel= mongoose.model("InterviewReport", interviewReportSchema)

module.exports = interviewReportModel