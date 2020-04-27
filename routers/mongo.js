/*
  Licensed to the Apache Software Foundation (ASF) under one
  or more contributor license agreements.  See the NOTICE file
  distributed with this work for additional information
  regarding copyright ownership.  The ASF licenses this file
  to you under the Apache License, Version 2.0 (the
  "License"); you may not use this file except in compliance
  with the License.  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, either express or implied.  See the License for the
  specific language governing permissions and limitations
  under the License.
 */

'use strict';

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const mongo_url = process.env.MONGO_DB_URL || 'mongodb://localhost/meetup' 

module.exports = function(app){

	app.use(bodyParser.urlencoded({ extended: true }));// manaje api data 
	app.use(bodyParser.json());

	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		//ssl: true,
		poolSize: 1,
		reconnectTries: 1
	};

	mongoose.Promise = global.Promise;

	mongoose.connect(mongo_url, options)
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