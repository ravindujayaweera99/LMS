const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv").config();

const Admin = require('./app/models/admin')
const Student = require('./app/models/student')
const Course = require('./app/models/course')
const Course_category = require('./app/models/course_category')
const Instructor = require('./app/models/instructor')

const userRoutes = require('./app/Routes/userRoutes');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Configure Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', userRoutes);
// app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// post data
app.post('/admin',async(req, res)=>{
    try {
        const admin = await Admin.create(req.body)
        res.status(200).json(admin);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})


app.post('/student',async(req, res)=>{
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.post('/course', async(req, res)=>{
    try {
        const course = await Course.create(req.body)
        res.status(200).json(course);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
})

app.post('/course_category', async(req, res)=>{
    try {
        const course_category = await Course_category.create(req.body)
        res.status(200).json(course_category);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
})

app.post('/instructor', async(req, res)=>{
    try {
        const instructor = await Instructor.create(req.body)
        res.status(200).json(instructor);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
})
//getting the database url
const URL = process.env.MONGODB_URL;

//connect to database url with the given options
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//database connection
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("Database is connected");
});

// Passport Configuration
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//use port 3000 
const PORT = process.env.PORT || 3000;

//running the app in previously defined port
const server = app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
})
