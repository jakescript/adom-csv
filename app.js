const Adom = require('adom-js');
const path = require('path')
const compiler = new Adom({
    cache: true,
    root: path.resolve(__dirname ,'src')
});
 
require('http').createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  res.end(compiler.render('index.adom'));
}).listen(8080, function () {
  console.log('Listening on port 8080');
})