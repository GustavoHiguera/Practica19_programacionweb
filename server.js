const mongoose = require('mongoose');
//Inyectamos la dependencia de mongoose.

const express= require('express');
//Inyectamos la dependencia de express.

const personsRoute= require('./routes/persons');
//Inyectamos la dependencia del router persons.

mongoose.Promise = global.Promise;
//Setteamos un valor de mongoose para que todo funcione perfectamente.

const app= express();
//Generamos la app de express.

app.set('view engine', 'ejs');
//Configuramos el view engine.

app.use(express.urlencoded( {extended:false} ));
app.use(personsRoute);
//Agregamos el router y el urlencoded para parsear el body en las peticiones POST.

mongoose.connect(
`mongodb+srv://ghiguera:xzEVV8g2@micluster.qc5dx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, //Este es el url que proporciona mongodb atlas, donde tuve que sustituir la contraseña.
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);
    
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));//Mensaje de error si no conecta.
db.once("open", function () {
console.log("Connected successfully"); //Mensaje de éxito si conecta con la base de datos de mongodb atlas
});
//Conectamos a nuestra base de datos.

app.listen(3000);
//Levantamos nuestro server.
//Con esto ya debería mostrarse el contenido de la base de datos en el localhost, en formato JSON. Para esta practica yo mismo
//tuve que crear los documentos para que me aparecieran, sin embargo en la siguiente practica los crearemos con un formulario.