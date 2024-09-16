import React, { useContext } from 'react';
import UserContext from '../context/UserContext'; // Adjust path as needed

function Profile() {
    const { user } = useContext(UserContext); // Correctly destructure `user` from context

    return (
        <div>
           
            {user ? (
                //  <h2>Profile Page</h2>
                <p>Welcome, {user.Username}!</p>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
}

export default Profile;
