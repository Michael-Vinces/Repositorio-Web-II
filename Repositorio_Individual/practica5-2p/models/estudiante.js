const { model, Schema } = require('mongoose');

const EstudianteSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del estudiante es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        identificationCard:{
            type: String,
            required: true,
            unique:true
        },
        studentRepresentative:{
            type: String,
            required: true,
        },
        course:{
            type: String,
            required: true,
        }
    }
);


module.exports = model('Estudiante', EstudianteSchema );