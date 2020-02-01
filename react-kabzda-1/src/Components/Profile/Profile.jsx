import React from 'react';
import classes from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import background from "../../images/background3.jpg"

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img src={background} alt="background"/>
            <div>
                ava + description
            </div>
            <MyPost/>
        </div>)

};

export default Profile