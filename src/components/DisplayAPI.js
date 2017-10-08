import React from 'react';
var api = require ('../utils/api.js')
//take the api
//parse it
//render
//use a promise  to resolve and reject
// 'use strict';

//make ajax request
componentDidMount () {
  api.fetchRepo()
  .then(function (response) {
    console.log(response)
  })
}

class DisplayAPI extends React.Component {
  render() {
    return (
      <div>
        <p>'get url'</p>
        <GetURL />;
      </div>
    );
  }
}

export default Api;
