const dotenv = require('dotenv')

const app = require('./src/app')

dotenv.config()
app.start()
