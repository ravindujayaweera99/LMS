const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
    {
        course_name:{
            type: String,
            required: true,
        },
        course_fee:{
            type: Number,
            required:true,
        },
        status:{
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Course = mongoose.model('course',courseSchema);
module.exports = Course;