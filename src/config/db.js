const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectado con exito')
  } catch (error) {
    console.log('Fallo en la coneccion')
  }
}

module.exports = { connectDB }
