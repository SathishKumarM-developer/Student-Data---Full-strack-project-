import mongoose from "mongoose";


const postSchema= mongoose.Schema({
      rollno:Number,
      name:{type:String},
      age:{type:Number,min:16,max:22},
      branch:{type:String,required:true},
      address:{
            city:String,
            state:String
      },
      hobbies:[{
            type:String
      }]
      

})

const Post=mongoose.model('Post',postSchema)

export default Post