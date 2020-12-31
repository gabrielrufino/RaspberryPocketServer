const sockets = require('../../sockets')

const router = {
  app: {
    'request:status': () => {
      sockets.watcher.emit('request:status')
    },
    'request:workflow:restart': () => {
      sockets.watcher.emit('request:workflow:restart')
    }
  },
  watcher: {
    'response:status': (data) => {
      sockets.app.emit('response:status', data)
    }
  }
}

module.exports = router
