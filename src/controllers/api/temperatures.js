const temperatures = {
  get: (_request, response) => {
    return response.json([])
  },
  post: (request, response) => {
    const { body } = request

    return response.status(201).json(body)
  }
}

module.exports = temperatures
