import React from 'react';
import PropTypes from 'prop-types';


function NewPostForm(props) {
  let _title = null;
  let _post = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, post: _post.value});
      console.log(_title.value)
    _title.value = ' ';
    _post.value = ' ';

  }


  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
        ref={(input) => {_title = input;}} />
        <textarea
          id='post'
          placeholder='Your post goes here'
          ref={(textarea) => {_post = textarea;}}/>
        <button type='submit'>Post this!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;
