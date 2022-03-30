import mongoose from 'mongoose'

const dbConnection = () => {
  const databaseURL: string = process.env.DB_URL ? process.env.DB_URL : 'mongodb://localhost:27017/demo'

  mongoose.connect(databaseURL, {
    autoCreate: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
    monitorCommands: true,
  })

  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + databaseURL)
  })

  mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected')
  })
}

export default dbConnection
