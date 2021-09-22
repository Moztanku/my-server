require('dotenv').config();
require('express-async-errors');


const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine','pug');

const logger = require('./startup/logging');

require('./startup/db')();


require('./startup/routes')(app);

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';
const server = app.listen(port,host,()=>{
    logger.info(`listening on ${host}:${port}`);
});