const express = require('express')
const route = express.Router()

const users = require('./users.json')

route.get('/', async (req, res, next) => {
  try {
    res.json({ data: 'testing api'})
  } catch (error) {
    res.send(error)
  }
})

route.get('/users', async (req, res, next) => {
  try {
    res.json({ data: users})
  } catch (error) {
    res.send(error)
  }
})

module.exports = route