const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => res.json(parseHeader(req.headers, req.connection.remoteAddress)));

function parseHeader(headers, connectionInfo) {
  return {
    ipaddress: connectionInfo.split(':').filter((el ,index, array) => array.indexOf(el) === array.length - 1 && el)[0],
    language: headers['accept-language'].split(',')[0],
    software: headers['user-agent'].split('(')[1].split(')')[0]
  }
}

app.listen(process.env.PORT || 3000, () => console.log('running the app'));
