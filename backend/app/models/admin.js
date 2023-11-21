const mongoose = require('mongoose')

const adminSchema = mongoose.Schema(
    {
        admin_username:{
            type: String,
            required: true,
        },
        admin_password:{
            type: String,
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

const Admin = mongoose.model('admin',adminSchema);
module.exports = Admin;