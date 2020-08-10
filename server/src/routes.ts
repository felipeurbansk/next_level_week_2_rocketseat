import express from 'express'

const routes = express.Router()

routes.get('/users', (req, res) => {
  res.json({ user: { name: 'Felipe', email: 'felipeurbansk@gmail.com', password: '123' } })
})

routes.post('/users', function (req, res) {
  res.json({ user: { name: 'Felipe', email: 'felipeurbansk@gmail.com', password: '123' } })
})

export default routes
