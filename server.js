
const express = require('express');
const path = require('path');
const app = express();

var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;


app.use(express.static('./dist/sentiment-analyzer'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/sentiment-analyzer/'}),
);

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);