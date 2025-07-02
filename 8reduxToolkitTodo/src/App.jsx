import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1 className='bg-[#212121] text-white'>Learn about Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
