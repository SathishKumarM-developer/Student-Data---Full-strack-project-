import express from 'express'
//import jsontokenRoute from './Routes/webtoken.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import postRoute from './Routes/post.js';
//import commentRoute from './Routes/comment.js'
//import UserRoute from './Routes/user.js';
//import commentRoute from './Routes/comment.js'
//import bodyparser from 'body-parser'
mongoose.connect('mongodb+srv://sathish41:Kumarsai411@cluster0.vadtdja.mongodb.net/mydatabase');

// const cat = mongoose.model("Cat", {name:String})
// const kitty = new cat({name: 'Ziltian'})
// kitty.save().then(()=>console.log('memes'))
const app=express()
app.use(express.json())
dotenv.config()
app.use(cors())

app.get('/cors',(req,res)=>{

res.set('Access-Control-Allow-Origin','*');
res.send({"msg": 'This has CORS-enabled '})

})

/*app.get("/",(req,res)=>{
      res.status(200).send("Welcome da Thambi.....")
    })
app.get("/user/userfr",(req,res)=>{

    res.status(201).send({"message":"hello"})
    console.log("hiiii")
})*/

//query params
// //app.get("/query",(req,res)=>{
//     const querydata = req.query;
//     console.log(querydata);
//     res.send("QueryData")

//})

//route params
/*app.get("/user/:userid",(req,res)=>{
  const para=req.params;     
    res.send(para)

})

app.post("/user",(req,res)=>{
     console.log(req.body)  
    res.status(200).send(req.body)
})*/

//app.use('/jsontoken',jsontokenRoute)
//app.use("/temperature", temperatureroute)
//app.use("/userss",UserRoute)//
//app.use("/comment",commentRoute)
app.use("/post",postRoute)

app.listen(3001,()=>{

   console.log(`Example app listening on port `)

})