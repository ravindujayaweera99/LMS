const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        student_name:{
            type: String,
            required:true,
        },
        student_email:{
            type: String,
            required:true,
        },
        contactNo:{
            type:String ,
            required:true,
        },
        student_password:{
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

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;