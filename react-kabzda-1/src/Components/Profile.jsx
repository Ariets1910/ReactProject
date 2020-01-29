import React from 'react';
import './Profile.css';
import background from "../images/background3.jpg"
const Profile = () => {
    return (
        <div className='profile'>
            <img src={background} alt="background"/>
            <div className="item">
                ava + description
            </div>
            <div className="item">
                My Posts
                <div className="item">
                    New Post
                </div>
                <div className="item">
                    Post 1
                </div>
                <div className="item">
                    Post 2
                </div>
            </div>
        </div>)

};

export default Profile