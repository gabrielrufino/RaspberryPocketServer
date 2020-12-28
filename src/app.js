const express = require('express')

const app = express()

app.use(express.json())

app.get('/api', (_request, response) => {
  return response
    .status(200)
    .json({
      alive: true
    })
})

module.exports = {
  start: () => {
    const { PORT } = process.env

    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
  }
}
