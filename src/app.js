const express = require('express')

const { PORT } = process.env

const app = express()

app.get('/api', (_request, response) => {
  return response
    .status(200)
    .json({
      alive: true
    })
})

module.exports = {
  start: () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
  }
}
