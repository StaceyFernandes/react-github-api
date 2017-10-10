import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts:[],
    };
    this.getXHR = this.getXHR.bind(this);
  }

  get(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.response);
        }
        else {
          reject(Error(xhr.statusText));
        }
      };
      xhr.onerror = function() {
        reject(Error("Network Error"));
      };
      xhr.send();
    });
  }

  getXHR() {
    this.get(`https://jsonplaceholder.typicode.com/${this.props.subreddit}`).then(function(response) {
    //  console.log(response);
      var posts = JSON.parse(response);
      console.log(posts);
      this.setState({posts:posts});
    }.bind(this), function(error) {
      console.log("Failed to process request", error);
    }.bind(this));
  }

  componentDidMount() {
    this.getXHR();
  }

  render() {
    return (
      <div >
        <h1>{`${this.props.subreddit}`}</h1>
         <ul>
           {this.state.posts.map(post =>
             <li key={post.id}>{post.title}</li>
           )}
        </ul>
      </div>
    );
  }
}


export default App;
// processRequest(xhr) {
//   if (xhr.readyState == 4 && xhr.status == 200 ) {
//     var posts = JSON.parse(xhr.responseText);
//     console.log(posts);
//     this.setState({posts:posts});
//   }
// }
//
//   xhr.onreadystatechange = this.processRequest(xhr);
