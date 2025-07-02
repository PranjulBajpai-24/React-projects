import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data= useLoaderData()
    /*const[data,setData] = useState([])
    useEffect(() => {
           fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(
                data=>{
                    console.log(data);
                    setData(data)
                }
            )
    }, [])*/
    
  return (
    <div className='text-center bg-gray-600 text-blue-300 p-7 font-bold text-4xl'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} style={{ borderRadius: '50%' }} />

    </div>
  )
}

export default GitHub
export const githubInfoLoader = async () =>{
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

