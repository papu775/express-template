const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helper/init_mongodb')

const AuthRoute = require('./Routes/Auth.Route')

const app = express()
app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// routes
app.use('/api/v1/auth',AuthRoute)

app.use(async(req,res,next)=>{
    next(createError.NotFound())
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message: err.message
        }
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})