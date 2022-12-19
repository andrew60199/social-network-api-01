require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express()

// Connect to database
connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
    res.json({ hello: "world" })
})

mongoose.connection.once('open', () => {
    console.log('Connected to database')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
})