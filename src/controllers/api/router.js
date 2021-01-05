const express = require('express')

const root = require('./root')
const temperatures = require('./temperatures')

const router = express.Router()

router.all('/', root)

router.get('/temperatures', temperatures.get)
router.post('/temperatures', temperatures.post)

module.exports = router
