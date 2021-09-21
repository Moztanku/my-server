require('dotenv').config();


const express = require('express');
const app = express();
const logger = require('./startup/logging');

app.use(express.json());

require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';
const server = app.listen(port,host,()=>{
    logger.info(`listening on ${host}:${port}`);
});