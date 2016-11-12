
//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

/*
var obj = new ObjectID();
console.log(obj);
*/

/*
var user = {
	name: "Alexis Suarez",
	age: 28
};

var {name} = user;
console.log(name);
*/

// Nos conectamos a la base de datos::
// Tiene dos parametros, el primero el url de la base datos y el segundo un callback::
// En Mongo no es necesario crear la base de datos antes de usarla, una vez agreguemos data el la creará en el back automáticamente::
MongoClient.connect("mongodb://localhost:27017/TodoApp", function(error, db){

	if (error){
		//Usamos return para que en caso de que haya error la función se detenga y no siga ejecutando codigo::
		return	console.log("Unable to connect to MongoDB Server");
	}
	
	console.log("Connected to MongoDB server");

	/*
	db.collection("Todos").insertOne({
		text: "Something to do",
		completed: false

	}, function(error, result){

		if (error){
			return console.log("Unable to insert Todo", error);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	*/

	
	/*
	db.collection("Users").insertOne({
		
		name: "Alexis",
		age: 28,
		location: "Some location string..."

	}, function(error, result){

		if (error){
			return console.log("Unable to insert the User", error);
		}

		console.log("User added successfully: " + JSON.stringify(result.ops, undefined, 2));
	}); 
	*/

	db.close();
});