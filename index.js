// import user from './models/users.js'
// /import config from './config/config'
// import UserService from './services/users.js'
const UserService = require('./services/users')
const AccountService = require('./services/Account')
const express = require('express')

const app = express()
app.use(express.json())

app.post('/users/create', UserService.add)
app.get('/users/:id', UserService.findUser)
app.get('/list', UserService.allUsers)

app.post('/Account/create', AccountService.addAccount)

app.listen(5000)
