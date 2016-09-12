// const http = require('http');
var request = require('request').defaults({maxRedirects:20,jar: true});
request.jar();
request('http://www.nytimes.com', function () {
  request('http://www.nytimes.com')
})

function download(url,callback) {
    var options = {
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Safari/602.1.50'
        }
    };
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
           callback(body);
      }
    })
}

exports.download = download;
