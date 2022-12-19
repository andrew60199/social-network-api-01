require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/connection')
const routes = require('./routes')

const PORT = process.env.PORT || 3001
const app = express()

// Connect to database
connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

mongoose.connection.once('open', () => {
    console.log('Connected to database')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
})