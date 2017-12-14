"use stroct";

const app = require('./app');
const server = app.listen(app.get('port'),startServer);

function startServer(err)
{	
	if(err) return;
	console.log("Arrancando API en el puerto"+app.get('port'));

}