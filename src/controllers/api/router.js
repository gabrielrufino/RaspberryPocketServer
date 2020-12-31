const express = require('express')

const root = require('./root')

const router = express.Router()

router.all('/', root)

module.exports = router
