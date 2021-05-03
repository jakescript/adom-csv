const Adom = require('adom-js');
const compiler = new Adom({
    cache: true,
    root: 'src'
});
 
require('http').createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  res.end(compiler.render('index.adom'));
}).listen(8080, function () {
  console.log('Listening on port 8080');
})