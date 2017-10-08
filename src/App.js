import React, { Component } from 'react';
import './App.css';
var axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts:[]
    };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/repos/vmg/${this.props.subreddit}/issues?state=close`)
      .then(res => {
         const posts = res.data //res.data.data.children.map(obj => obj.data);
         this.setState({ posts });
         console.log(posts)
       });
  }

  render() {
    return (
      <div >
        <h1>{`${this.props.subreddit}`}</h1>
         <ul>
           {this.state.posts.map(post =>
             <li key={post.id}>{post.user.login}</li>
           )}
        </ul>
      </div>
    );
  }
}


export default App;
