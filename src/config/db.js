const mongoose = require('mongoose')


const connectDb = async () => {
  try {
    const DataBase = 'mongodb+srv://Relationship:Relationship123@cluster0.e4rwieb.mongodb.net/categories?retryWrites=true&w=majority&appName=Cluster0'

    await mongoose.connect(DataBase)

        console.log('Database connected 🚀🚀🚀')

  } catch (error) {
    console.log(error)
  }
}


module.exports = connectDb


