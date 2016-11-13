
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

	// deleteMany
	// db.collection("Todos").deleteMany({
	// 	text: "Eat lunch"
	// }).then(function(result){
	// 	console.log(result);
	// });


	// deleteOne
	// db.collection("Todos").deleteOne({
	// 	text: "Eat lunch"
	// }).then(function(result){
	// 	console.log(result);
	// });


	// findOneAndDelete
	db.collection("Todos").findOneAndDelete({
		completed: false
	}).then(function(result){
		console.log(result);
	});

	//db.close();

});