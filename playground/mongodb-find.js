
//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// Nos conectamos a la base de datos::
// Tiene dos parametros, el primero el url de la base datos y el segundo un callback::
// En Mongo no es necesario crear la base de datos antes de usarla, una vez agreguemos data el la creará en el back automáticamente::
MongoClient.connect("mongodb://localhost:27017/TodoApp", function(error, db){

	if (error){
		//Usamos return para que en caso de que haya error la función se detenga y no siga ejecutando codigo::
		return	console.log("Unable to connect to MongoDB Server");
	}
	
	console.log("Connected to MongoDB server");

	//Convertimos el cursor en un array para manejarlo mejor::
	// El Query se indica como un objeto también::
	
	// db.collection("Todos").find({
		
	// 		_id: new ObjectID("582737733e35787d83205f22")

	// 	}).toArray().then(function(docs){

	// 	console.log('Todos');
	// 	// Lo convertimos en un array de objetos::
	// 	console.log(JSON.stringify(docs, undefined, 2));

	// }, function(error){
	// 	console.log("Unable to fetch the Todos", error);
	// });

	// db.collection("Todos").find().count().then(function(count){
	// 	console.log(`Todos count: ${count}`);
	// }, function(error){
	// 	console.log("Unable to fetch the Todos", error);
	// });

	db.collection("Users").find({

		name: "Alexis"

	}).toArray().then(function(docs){

		console.log("These are all todos you were looking for: ");
		console.log(JSON.stringify(docs, undefined, 2));

	}, function(error){
		console.log("Unable to fetch the Todos", error);
	});

	db.close();

});