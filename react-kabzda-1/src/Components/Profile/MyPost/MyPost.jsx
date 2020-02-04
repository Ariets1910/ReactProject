import React from 'react';
import classes from './MyPost.module.css';
import PostN from "./PostN/PostN";
import Game from "../../Game/Game";

const MyPost = () => {
    return (
      <div className={classes.mypost}>
          <div>
              MyPosts
          </div>
          <div className={classes.game}>
              <textarea name="" id="" cols="56" rows="10"></textarea>
              <Game question="Яка це країна?"/>
          </div>
          <div className={classes.field}>
              <button>Добавить пост</button>
              <button>Очистить</button>

          </div>
         <div> <PostN message="Hi, how are you?" likeCount="16" /></div>
         <div> <PostN message="This is my first post"/></div>
          <div><PostN message="Thank you Dima"  likeCount="9999" /></div>
          <div><PostN message="I love you too"/></div>
          </div>)
};

export default MyPost