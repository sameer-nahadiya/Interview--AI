const moongoose = require("mongoose");


const technicalQuestionSchema = new moongoose.Schema({
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

const behaviouralQuestionSchema = new moongoose.Schema({
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

const skillGapSchema = new moongoose.Schema({
    skill:{
        type: String,
        require: [true, "Skill is required"]
    },
    severity:{
        type: string,
        enum: ["low", "medium", "high"],
        require: [true, "Severity is required"]
    }
},{
    _id: false
})

const preparationPlanSchema = new moongoose.Schema({
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

const interviewReportSchema = new moongoose.Schema({
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
    prepartionSchema: [ preparationPlanSchema]
},{
    timestamps: true
})


const interviewReportModel= moongoose.model("InterviewReport", interviewReportSchema)

module.exports = interviewReportModel