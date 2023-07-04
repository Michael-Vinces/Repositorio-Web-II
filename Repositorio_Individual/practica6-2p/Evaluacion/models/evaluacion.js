const { model, Schema } = require('mongoose');


const evaluacionSchema = Schema(
    {
        id:{
            type: Number,
            required: [ true, 'El id del docente es necesario'],
            unique:true
        },
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