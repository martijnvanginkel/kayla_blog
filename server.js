var proxyPort = 80;
var http = require('http');
var httpProxy = require('http-proxy');

var options = {
    router: {
        'localhost': '127.0.0.1:3000',
        'somesite.com': '127.0.0.1:3000',
        'othersite.com': '127.0.0.1:4000'
    }
};
console.log('Proxy Routing:');
console.log(options);
console.log();

var proxyServer = http.createServer(options);
proxyServer.listen(proxyPort);
console.log('Proxy listening on port ' + proxyPort);