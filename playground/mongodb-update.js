
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

	// db.collection("Todos").findOneAndUpdate({
	// 	_id: new ObjectID("5827ad859e301c7cc6d36554")
	// },{

	// 	// $SET es un update operator, estos se usan para actualizar valores en MongoDB::
	// 	$set: {
	// 		completed: true
	// 	}

	// }, {

	// 	//Este es necesario si queremos retornar el objeto con los valores actualizados::
	// 	returnOriginal: false

	// }).then(function(result){
	// 	console.log(result);
	// });


	db.collection("Users").findOneAndUpdate({

		name:{
			$ne: "Alexis"
		}

	},{

		// $SET es un update operator, estos se usan para actualizar valores en MongoDB::
		$set: {
			name: "Alexis"
		},
		$inc: {
			age: -1
		}

	}, {

		//Este es necesario si queremos retornar el objeto con los valores actualizados::
		returnOriginal: false

	}).then(function(result){
		console.log(result);
	});

	//db.close();

});