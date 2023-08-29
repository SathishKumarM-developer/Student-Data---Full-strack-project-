import Post from "../Model/post.js";
export const postInsert=async(req,res)=>{
    const data = req.body
    console.log(data)
    const post = new Post({
      rollno:data.rollno,
      name:data.name,
      age:data.age,
      branch:data.branch,
      address:data.address,
      hobbies:data.hobbies
   })
    try{
        await post.save;
        res.status(200).send(post)
    }
    catch(err){
        console.log(err)
    }}
export const getpost=async(req,res)=>{
        try{
            const post= await Post.find()
            res.status(200).send(post)

        }
        catch(err){
                console.log(err)
                res.send(err)
        }}

