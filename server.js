// server.js
var express = require('express');
var path = require('path');
const history = require('connect-history-api-fallback');
app = express();
var serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "/dist"));

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
