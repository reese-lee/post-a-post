import React from 'react';

function Post(props){
  console.log(props);
  return (
    <div>
      <h1>{props.post.title}</h1>
      <h1>{props.post.post}</h1>
    </div>

  );
}


export default Post;
