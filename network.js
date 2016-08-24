// const http = require('http');
var request = require('request');

function download(url,callback) {
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
           callback(body);
      }
    })
}

exports.download = download;
