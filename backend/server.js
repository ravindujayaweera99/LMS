const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv").config();

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
