
const express = require('express');
const path = require('path');
const app = express();


// app.use(express.static('./dist/sentiment-analyzer'));

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

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);