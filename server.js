const express = require('express')
const connectDb = require('./src/config/db')



const app = express()
app.use(express.json())

const userRoute = require('./src/routes/userRoute')
app.use('/api/auth', userRoute)

const movieCategoryRoute = require('./src/routes/movieCategoryRoute')
app.use('/api', movieCategoryRoute)




const PORT = 3333

app.listen(PORT, () => {
  console.log('server is up and running ✅✅✅')
})


connectDb()