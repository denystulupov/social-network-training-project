import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPlIx87uSfC0syODZ73wKtwbo57Nu3WFfJXw&usqp=CAU' alt=""/>
        { props.message }
          <div>
        <span>&#10084;</span> { props.likesCount }
      </div>
    </div>
  )
};

export default Post;