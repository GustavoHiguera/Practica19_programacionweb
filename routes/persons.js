const express= require('express');
//Se inyecta la dependencia de express.

const router= express.Router();
//Se genera la instancia del router.

const mongoose= require('../node_modules/mongoose');
//Se inyecta la dependencia de mongoose.

let Person= require('../models/person');
//Se inyecta la dependencia del modelo "person" creado previamente.

router.get('/persons', function(req, res, next) {
    Person.find(function (err, persons) {
    if (err) return next(err);
    res.json(persons);
    })
})
//Esta ruta por el método get lo que hace es usar el método find del modelo Person mediante una promesa,
//la promesa puede regresar error o el valor, por lo que en este caso si regresa error, se le da a next y se termina.
//Si regresa el valor, lo convierte en un json.

module.exports=router;
//Exportamos el ruteador.

