/*jshint node:true*/
//------------------------------------------------------------------------------
// node.js starter application for Bluemix
///-----------------------------------------------------------------------------
// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');
var request = require('request');
var https = require('https');
var http=require('http');
var cors = require('cors');    

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();
app.use(cors());
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
//app.listen(appEnv.port, appEnv.bind, function() {
	app.listen(1337, '127.0.0.1', function() {

    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

//all get request codes go here
var Mojio, mojio, config;

config = {
	application: '16fd9e2e-6003-43c0-a83c-d5aa9b501eec',
	secret: '36ad0baf-fa5a-4725-998c-6322e2b8fd90',
	hostname: 'api.moj.io',
	version: 'v1',
	port: '443',
	scheme: 'https'
};

Mojio = require('./lib/MojioClient.js');

mojio = new Mojio(config);
//https://developer.moj.io/reference/documentation
//https://github.com/mojio/mojio-js

//Trip
//Vehicle
//Product
//Subscription
//Observer
mojio.login('hsdars', 'Darshanhs90-', function(error, result) {
	if (error) {
		return console.log("error: " + error);
	} else {
		console.log("success:" + result);
		console.log(JSON.stringify(result));
		//declare other models like this
		mojio.query(mojio.model('Event',null), { limit:10, offset:0, sortby:"Time", desc:true,criteria:{} }, function(req,res){
			console.log('event'+res.Data.length);
		})

		mojio.query(mojio.model('Trip',null), { limit:10, offset:0, sortby:"StartTime", desc:false,criteria:{} }, function(req,res){
			console.log('trip'+res.Data.length);
		})

		mojio.query(mojio.model('User',null), { limit:10, offset:0, sortby:"UserName", desc:false,criteria:{} }, function(req,res){
			console.log('user'+res.Data.length);
		})

		mojio.query(mojio.model('Vehicle',null), { limit:10, offset:0, sortby:"Name", desc:false,criteria:{} }, function(req,res){
			console.log('Vehicle'+JSON.stringify(res.Data));
		})



	}
});


