import React from 'react'
import PropTypes from 'prop-types'
import PostList from './PostList'
import NewPostForm from './NewPostForm'

const PostContainer = (props) => {
  return (
    <div>
      <PostList posts={props.posts}/>
      {props.showForm ?   <NewPostForm /> : <button onClick={props.handleShowForm}>button</button>}

    </div>
  )
}

export default PostContainer;
