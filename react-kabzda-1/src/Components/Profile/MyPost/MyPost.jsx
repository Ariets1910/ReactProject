import React from 'react';
import classes from './MyPost.module.css';
import PostN from "./PostN/PostN";

const MyPost = () => {
    return (
      <div className={classes.myPost}>
          MyPost
          <PostN/>
          </div>)
};

export default MyPost