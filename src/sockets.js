const sockets = {
  _app: null,
  _watcher: null,
  get app () {
    return this._app
  },
  get watcher () {
    return this._watcher
  },
  set app (socket) {
    this._app = socket
  },
  set watcher (socket) {
    this._watcher = socket
  }
}

module.exports = sockets
