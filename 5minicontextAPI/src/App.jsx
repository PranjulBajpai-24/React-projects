import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider'; // Ensure correct path

function App() {
    return (
        <UserContextProvider>
            <h1>Context API wala project</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    );
}

export default App;
