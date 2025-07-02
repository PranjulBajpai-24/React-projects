import React, { useContext } from 'react';
import UserContext from '../context/UserContext'; // Correct default import

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <div>Please Login</div>;
    
    if (!(user.username)){
        return <div>Please enter something</div>;
    }
    else{
        return <div>Welcome {user.username}</div>;
    }
    
}

export default Profile;
