import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo()  //syntax:- AddTodo- we have to add something in the store and adding is done using dispatch hence we need to dispatch any event.
{
    const [input, setInput] = useState('')
    const dispatch = useDispatch() // dispatch uses a reducer to add changes in the store

    const addTodoHandler = (e) => {
        e.preventDefault() // to prevent submitting of value
        if (input.trim() === '') {
            alert('Todo cannot be empty') // Alert if the input is empty or just spaces
            return
        }
        dispatch(addTodo(input))
        setInput('') // to clean the input box
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => {
                    if (e.target.value.trim() === '') {
                        alert('Todo cannot be empty') // Alert if the user tries to enter an empty string
                    }
                    setInput(e.target.value)
                }}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
