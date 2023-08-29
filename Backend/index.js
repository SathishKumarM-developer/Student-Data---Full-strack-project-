import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import postRoute from './Routes/post.js';
mongoose.connect('mongodb+srv://sathish41:Kumarsai411@cluster0.vadtdja.mongodb.net/mydatabase');

const app=express()
app.use(express.json())
dotenv.config()
app.use(cors())

app.get('/cors',(req,res)=>{

res.set('Access-Control-Allow-Origin','*');
res.send({"msg": 'This has CORS-enabled '})

})

app.use("/post",postRoute)

app.listen(3001,()=>{

   console.log(`Example app listening on port `)

})
