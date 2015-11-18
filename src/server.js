var fs = require('fs');
var path = require('path');
var http2 = require('http2');
var https = require('https');

var opts = {
  key: fs.readFileSync(path.join(__dirname, '../config/http2-cors-testcase.key')),
  cert: fs.readFileSync(path.join(__dirname, '../config/http2-cors-testcase.crt'))
};

http2.createServer(opts, function onHttp2Request(req, res) {
  console.log('=== HTTP2 ============================');

  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

  if (req.method === 'OPTIONS') {
    console.log('=== OPTIONS ============================');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-Other');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD');
    res.setHeader('Access-Control-Max-Age', '1728000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  res.writeHead(200);
  res.end();
}).listen(process.env.HTTP2_PORT || 8080, function () {
  console.log(this.address());
});

https.createServer(opts, function onHttpRequest(req, res) {
  console.log('=== HTTP ============================');
  res.writeHead(200);
  res.end();
}).listen(process.env.HTTP_PORT || 8081, function () {
  console.log(this.address());
});
