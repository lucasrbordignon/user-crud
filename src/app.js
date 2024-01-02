require('dotenv').config();

const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')

const app = express()
const port = process.env.PORT || 3000

const conn = require('./db/conn')

conn()

app.use(express.json())
app.use(cors())
app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
