import React from 'react';
import Comment from './Comment';

function Post({ post }) {

  return(

    <div className="post-list">

      <div className="post-list-header">
        <div className="post-list-header-avatar">
          <img src={post.author.avatar } />
        </div>
        <div className="post-list-header-name">
          { post.author.name }
          <div className="post-list-header-date">
            { post.date }
          </div>
        </div>
      </div>
      <div className="post-list-body">
        { post.content }
      </div>

      { post.comments.map(comment => (
        <Comment key={comment.id} data={comment} />)
      ) }

    </div>

  )
}

export default Post;
