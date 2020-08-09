import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json({ user: { name: 'Felipe', email: 'felipeurbansk@gmail.com', password: '123' } })
})

app.post('/users', function (req, res) {
  res.json({ user: { name: 'Felipe', email: 'felipeurbansk@gmail.com', password: '123' } })
})

app.use(express.json())
app.listen(3333)

export default app
