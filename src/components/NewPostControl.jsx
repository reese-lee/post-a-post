{/*import React from 'react';
import PropTypes from "prop-types";
import NewPostForm from './NewPostForm';
import PostList from './PostList'

class NewPostControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewPost(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let display = <button onClick ={this.handleNewPost}>Post</button>
    if (this.state.formVisibleOnPage){
      display = <NewPostForm onNewPostCreation={this.props.onNewPostCreation}/>;
    }
    return(
      <div>
        {display}
      </div>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
*/}
