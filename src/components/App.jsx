import React from 'react';
import Navbar from './Navbar';
// import { Switch, Route } from 'react-router-dom';
import Splash from './Splash';
// import Error404 from './Error404';
// import NewLikeControl from './NewLikeControl';
// import Post from './Post';
import PostList from './PostList';
// import NewPostControl from './NewPostControl';
import PostContainer from './PostContainer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [{title: "hi", post:"some stuff"}],
      showForm: true
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost){
    console.log(newPost)
    console.log(masterPostList)
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost)
    this.setState({masterPostList: newMasterPostList, test: "test"});
    console.log(this.state)
  }

  handleShowForm() {
    this.setState({showForm: !showForm})
  }

  render() {
    return(
      <div>
        <Navbar/>
        <Splash/>
        <PostContainer posts={this.state.masterPostList} showForm={false} handleShowForm={this.handleShowForm}/>

      </div>
    );
  }
}

export default App;


// <Switch>
  // <Route exact path='/'/>
  //   <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
  // <Route path='/men' component={NewLikeControl}/>
  //   <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
  //
  // <Route path='/post' render={() => <Post post={this.state.masterPostList[0]} />} />
  // <Route component={Error404}/>
// </Switch>
