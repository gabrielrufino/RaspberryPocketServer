const root = (_request, response) => {
  return response
    .status(200)
    .json({
      alive: true
    })
}

module.exports = root
