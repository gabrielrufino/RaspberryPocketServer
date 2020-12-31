const cors = require('cors')
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const apiRouter = require('./controllers/api/router')
const socketRouter = require('./controllers/socket/router')
const sockets = require('./sockets')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)

io.on('connection', (socket) => {
  const { client } = socket.handshake.query

  if (client === 'app') {
    sockets.app = socket
  } else if (client === 'watcher') {
    sockets.watcher = socket
  }

  Object
    .entries(socketRouter[client])
    .forEach(([event, controller]) => {
      socket.on(event, controller)
    })
})

module.exports = {
  start: () => {
    const { PORT } = process.env

    server.listen(PORT, () => console.log(`Listening on ${PORT}`))
  }
}
