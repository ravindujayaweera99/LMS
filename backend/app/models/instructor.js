const mongoose = require('mongoose')

const instructorSchema = mongoose.Schema(
    {
        instructor_name:{
            type: String,
            required:true,
        },
        instructor_email:{
            type: String,
            required:true,
        },
        contactNo:{
            type:String ,
            required:true,
        },
        instructor_password:{
            type:String ,
            required:true,
        },
        status:{
            type:Boolean ,
            required:true,
        }
    },
    {
        timestamps:true
    }
)

const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;