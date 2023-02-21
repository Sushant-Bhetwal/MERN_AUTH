require('dotenv').config();
const express = require('express');

// database
const dbConnection = require('./db');
dbConnection();

// routesImport
const authRoute = require("./routes/auth")


// express app
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/auth', authRoute)


app.listen(process.env.PORT, () => {
    console.log("Server Started")
})