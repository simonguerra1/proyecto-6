require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const discosRouter = require('./src/api/routes/disco')
const tiendasRouter = require('./src/api/routes/tienda')

const app = express()

connectDB()

//linea para poder recojer datos json
app.use(express.json())

app.use('/api/v1/discos', discosRouter)
app.use('/api/v1/tiendas', tiendasRouter)

app.use('/saludar', (req, res, next) => {
  return res.status(200).json('Esto funciona')
})

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found.')
})

app.listen(3000, () => {
  console.log('Servidor levantado: http://localhost:3000')
})
