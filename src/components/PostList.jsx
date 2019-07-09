import React from 'react';
import Post from './Post';
import { makeStyles } from '@material-ui/core/styles';
// import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

function PostList(props) {
  console.log("Hi from PostList", props.posts);
    return(
      <div>
      {props.posts.map((post, index) => 
        <Post
          post={post}
          key={index} />
      )}
      </div>
    );
}

PostList.propTypes = {
  postList: PropTypes.array
}

export default PostList;
