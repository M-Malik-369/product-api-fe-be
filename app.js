require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const faker = require('faker');

const app = express()
const port = process.env.PORT || 8080

// mongodb connection

const connectDB = require('./db/connectDB')
connectDB(process.env.MONGODB_URL)

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve static HTML file
app.use(express.static('public'))

// Import product controller
const productController = require('./controllers/productController')

// API endpoints
app.get('/api/products', productController.getAllProducts)
app.get('/api/products/search', productController.searchProducts)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
