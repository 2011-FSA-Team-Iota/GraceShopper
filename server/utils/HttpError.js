const http = require('http')

function HttpError(status, message) {
  const err = new Error(message || http.STATUS_CODES[status])
  err.status = status
  Object.setPrototypeOf(err, HttpError.prototype)
  return err
}

Object.setPrototypeOf(HttpError.prototype, Error.prototype)

HttpError.prototype.middleware = function() {
  const self = this
  return function(req, res, next) {
    next(self)
  }
}

module.exports = HttpError
