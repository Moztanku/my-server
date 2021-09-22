const express = require('express');

const pageNotFound = require('../routes/404');

module.exports = function(app){
    app.use('/',pageNotFound);
};