import express from 'express'
import {port,mongoDbURL} from './Config.js'
import mongoose from 'mongoose'
import router from './Routers/BookRouter.js'
import cors from 'cors'
const app = express()
app.use(express.json())//to send the data say its json
app.use(cors())
app.use('/',router)
mongoose.connect(mongoDbURL)
.then(()=>{
    console.log("connected successfully to db")
    app.listen(port,()=>{
        console.log("is running")
    })
})
.catch((err)=>{
    console.log(err)
})