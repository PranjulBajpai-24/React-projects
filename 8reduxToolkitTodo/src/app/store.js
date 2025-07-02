import {configureStore} from '@reduxjs/toolkit' //The configureStore function from @reduxjs/toolkit is a utility that simplifies the process of creating a Redux store. 
import todoReducer from '../features/todo/todoSlice';
 export const store = configureStore({
    reducer: todoReducer //todoReducer is being set as the single reducer for the store.
 })
