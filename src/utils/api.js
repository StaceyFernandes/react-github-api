var axios = require('axios');

module.exports = {
  fetchRepo: function() {
    var encodedURI = window.encodeURI('https://api.github.com/repos/vmg/redcarpet/issues?state=close');

    return axios.get(encodedURI)
      .then(function(response) {
        return response;
      });
  }
}
