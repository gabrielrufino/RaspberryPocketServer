const sockets = {
  _app: null,
  _watcher: null,
  get app() {
    return this._app
  },
  get watcher() {
    return this._watcher
  },
  storeSocket (socket) {
    const { client } = socket.handshake.query

    if (client === 'app') {
      this._app = socket
    } else if (client === 'watcher') {
      this._watcher = socket
    }
  }
}

module.exports = sockets
