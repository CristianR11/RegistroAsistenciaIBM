const appName = require('./package').name;
const http = require('http');
const express = require('express');
const log4js = require('log4js');/* 
const localConfig = require('./config/local.json'); */


const logger = log4js.getLogger(appName);
const app = express();
const server = http.createServer(app);

app.use(log4js.connectLogger(logger, { level: process.env.LOG_LEVEL || 'info' }));
require('./services/index')(app);
require('./routers/index')(app, server);

app.use('/api',require('./routes/regis'));

const port = process.env.PORT || 3000;
server.listen(port, function(){
  logger.info(`meanexample listening on http://localhost:${port}`);
});


module.exports = server;