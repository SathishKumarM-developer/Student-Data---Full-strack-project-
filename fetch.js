import usestate from 'react'
import React, { useState,useEffect } from "react";
export default function Post(){
    const [data,setdata]=useState([{}])
    useEffect(()=>{fetch("/post").then(res=>res.json())
              .then(dd=>{setdata(dd)},console.log(data))
               .catch(err=>console.log(err))},
    [])
    return(<>
    
     <div className='header'><h1>Student Details</h1></div>
     {data.map((post)=>{
     
        return(<>
        
        <div className='student'>
            <div className='rollno'>
                <h2>Rollno :</h2>
                <p>{post.rollno}</p>
            </div>
             <div className='name' id='row'> 
                <h2>Student Name :</h2>
                <p>{post.name}</p>
             </div>
             <div className='age' id='row'><h2>Age :</h2>
             <p>{post.age}</p></div>
             <div className='branch' id='row'><h2>Branch :</h2>
             <p>{post.branch}</p></div>
        </div>
        </>)})
     }
    </>)
}


