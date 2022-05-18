const mongoose = require('mongoose');
//Se inyecta la dependencia de mongoose.

let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});
//Se instancia un nuevo Schema de Mongoose, esta definición debe coincidir con la definición
//de la colección que tenemos en la base de datos de MongoDB.

module.exports = mongoose.model('Persons', PersonSchema);
//Se exporta la instancia del modelo de Mongoose.
//El primer parámetro es el nombre de la colección contenida en la base de datos
//El segundo parámtero es el nombre del esquema, puede ser cualquier identificador válido.