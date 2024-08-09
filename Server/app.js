const express = require('express')
const app = express()
const cors = require("cors")

const userController = require('./controllers/userController')

const authentication = require('./middlewares/authentication')
const exerciseController = require('./controllers/exerciseController')
const nutrientController = require('./controllers/nutrientController')
const profileController = require('./controllers/profileController')
const midtransController = require('./controllers/midtransController')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// user
app.post('/login', userController.handleLogin)
app.post('/register', userController.handleRegister)
app.post('/google-login', userController.loginGoogle)

app.use(authentication)
app.get('/profile', profileController.readProfile)
app.post('/profile', profileController.handleProfile)

//midtrans
app.post('/token-midtrans', midtransController.tokenMidtrans)
app.post('/change-status',midtransController.changeIsMember)

// exercise
app.get('/exercise', exerciseController.readProgram)
app.get('/exercise/:id', exerciseController.readProgramById)

// nutrions
app.put('/next-day', nutrientController.nextDay)
app.get('/nutrient', nutrientController.readNutrient)
app.post('/add-protein',nutrientController.addProtein)
app.post('/add-calorie',nutrientController.addCalorie)

module.exports = app