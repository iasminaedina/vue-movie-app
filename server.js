// server.js
var express = require('express');
var path = require('path');
const history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');
app = express();
const staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));
app.use(staticFileMiddleware);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist"), function (err) {
    if (err) {
    res.status(500).send(err)
    }
  })
})
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);