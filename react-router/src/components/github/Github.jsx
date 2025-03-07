import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    //const[data,setData]=useState([])
    const data=useLoaderData()
    // useEffect(()=>{
    //     const res= fetch(`https://api.github.com/users/hiteshchoudhary`)
    //         .then(res=>res.json())
    //         .then(data=>setData(data))   
        
    // },[data])
  return (
    <div className='text-center m-4 bg-gray-600 [p-4 text-3xl'> 
    Github Followers:{data.followers}  
    <img src={data.avatar_url} alt="avatar" className="rounded-full w-32 h-32"/>
    </div>
  )
}

export default Github

export const gitInfoLoader=async()=>{
  const res= await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return res.json();
        
}