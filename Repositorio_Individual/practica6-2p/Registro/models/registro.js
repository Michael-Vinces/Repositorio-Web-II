const { model, Schema } = require('mongoose');

const RegistroSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del registro es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        date:{
            type: String,
            required: true
        },
        hour:{
            type: String,
            required: true
        },
        gradeEarned:{
            type:Number,
            default:0
        },
        topGrade:{
            type:Number,
            default:0
        },
        estudiante: {
            type: String,
            required:true
        },
        evaluacion: {
            type: String,
            required: true
        }
    }
);

RegistroSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Registro', RegistroSchema );