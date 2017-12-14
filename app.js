"use strict";

/*importar paquetes*/

const express = require ('express');
const bodyParser = require('body-parser');

/*Rutas*/ 
const publicDir = express.static(`${__dirname}/public`);
const routes = require("./routes/routes");
const conf = require('./conf');


const port = process.env.PORT || conf.server.port;


//Configuraciones

process.setMaxListeners(0);

//APP

let app = express();

//APP Props

app
	.set('port',port)
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended:false}))
	.use(publicDir)
	.use(routes);
module.exports = app;
