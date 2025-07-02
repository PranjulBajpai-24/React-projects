import { createSlice, nanoid } from '@reduxjs/toolkit'; // 'createSlice' is a function that simplifies the process of creating a Redux slice. 'nanoid' is a function that generates unique IDs

const initialState = {
    todos: []
}

export const todoSlice = createSlice({ // almost like reducers
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { // in context API we only used to give the function declaration but here we'll give the declaration as well as definition
            const todo = {
                id: nanoid(),
                text: action.payload // payload is a property of the action object that carries the data needed to update the state
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo =>
              todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions // This line exports the action creators for the addTodo, removeTodo, and updateTodo reducers. These action creators can then be dispatched in your React components to modify the state managed by the Redux store.

export default todoSlice.reducer // this is used so that store can get a list of all the reducers
