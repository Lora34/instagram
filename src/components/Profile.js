import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
    
    return (
        <div className="container profile">
             <User 
                src="https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-1024x768.jpeg"
                alt=""
                name="Kate"
                />
             <Palette/>
        </div>
    )
}

export default Profile;