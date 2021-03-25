const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const controller = require('./lib/controllers/downloadController');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',controller.main);

app.get('/download', controller.download);

app.listen(port);
