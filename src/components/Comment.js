import React from 'react';

function Comment({ data } ){

  console.log(data);

  return(
    <>
      <span></span>
      <div className="post-list-comment">
        <div className="post-list-comment-avatar">
          <img src={ data.author.avatar } alt='author comment' />
        </div>
        <div className="post-list-comment-content">
          <p> { data.content } </p>
        </div>
      </div>
    </>
  );
}

export default Comment;
