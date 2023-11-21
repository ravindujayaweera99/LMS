const mongoose = require('mongoose')

const course_categorySchema = mongoose.Schema(
    {
        category_name:{
            type: String,
            required: true,
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

const Course_category = mongoose.model('course_category',course_categorySchema);
module.exports = Course_category;