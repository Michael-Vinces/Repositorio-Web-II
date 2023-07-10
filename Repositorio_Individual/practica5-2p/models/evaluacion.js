const { model, Schema } = require('mongoose');


const evaluacionSchema = Schema(
    {
        name:{
            type: String,
            required: true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        subject:{//Asignatura
            type: String,
            required: true
        },
        teacher:{
            type: String,
            required: true,
        }
    }
);


module.exports = model('Evaluacion', evaluacionSchema );