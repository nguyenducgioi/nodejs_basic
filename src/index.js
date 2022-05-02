const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const route = require('./routes')
const port = 5000
const app = express()

// Middleware to send form data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

route(app)

app.listen(port, () => {
    console.log(`Ví dụ từ port ${port}`)
}) 
