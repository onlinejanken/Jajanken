const express = require('express');
const app = express();

const test = require('./controller/test');

app.use('/test', test);

app.listen(3000);