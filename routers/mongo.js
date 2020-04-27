'use strict';

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const mongo_url = process.env.MONGO_DB_URL || 'mongodb://localhost/meetup' 

module.exports = function(app){

	app.use(bodyParser.urlencoded({ extended: true }));// manaje api data 
	app.use(bodyParser.json());

	//Configuracion para la conexión local
	/*const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		//ssl: true,
		poolSize: 1,
		reconnectTries: 1
	};*/

	//configuración para la conexión con compose for mongo
	const options = {
		poolSize: 1,
		reconnectTries: 1,
		useNewUrlParser: true
	};


	mongoose.Promise = global.Promise;

	//Conexión local
	/*
	mongoose.connect(mongo_url, options)
  		.catch((err) => {
    		if (err) console.error(err);
	  });*/
	  
	//Conexión compose for posgresql
	  //credenciales  mongodb://admin:XWKHJRUVVWSYAAAR@portal-ssl1151-42.bmix-dal-yp-af06f2ca-9e3c-438f-a3b3-2128a47c1935.1010670159.composedb.com:20945,portal-ssl1246-43.bmix-dal-yp-af06f2ca-9e3c-438f-a3b3-2128a47c1935.1010670159.composedb.com:20945/compose?retryWrites=false&authSource=admin&ssl=true
	mongoose.connect('mongodb://admin:XWKHJRUVVWSYAAAR@portal-ssl1151-42.bmix-dal-yp-af06f2ca-9e3c-438f-a3b3-2128a47c1935.1010670159.composedb.com:20945,portal-ssl1246-43.bmix-dal-yp-af06f2ca-9e3c-438f-a3b3-2128a47c1935.1010670159.composedb.com:20945/compose?retryWrites=false&authSource=admin&ssl=true', options)
  		.catch((err) => {
    		if (err) console.error(err);
  	});

	var db = mongoose.connection;
	db.on('error', (error) => {
        console.error(error);
	});

	console.info('Connection established with mongodb');
	console.info(`Connection details: ${mongo_url}`);
};