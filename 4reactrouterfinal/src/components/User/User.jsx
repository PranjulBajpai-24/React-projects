import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-blue-300 p-7 font-bold text-5xl'>User: {userid}</div>
  )
}

export default User

