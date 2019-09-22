import React from 'react';

function Post({ post } ){

  console.log(post.author.name);

  return(

    <div className="post-list">

      <div className="post-list-header">

      </div>

    </div>

  )
}

export default Post;
