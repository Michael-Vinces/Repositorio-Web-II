const mongoose = require('mongoose');

//------------Modelo para la entidad maestra "ESTUDIANTES"
const Estudiantes = mongoose.model("Estudiantes", {
  Nombre: String,
  Identificacion: String,
  Representante: String,
  Curso: String
})
//------------Modelo para la entidad maestra "EVALUACIONES"
const Evaluaciones = mongoose.model("Evaluaciones", {
  Nombre: String,
  Asignatura: String,
  Docente: String
})
//------------Modelo para la entidad transaccional "REGISTROS"
const Registros = mongoose.model("Registros", {
  ID_Estudiante: [{ ID_Estudiante: { type: mongoose.Types.ObjectId, ref: "Estudiantes" } }],
  ID_Evaluacion: { type: mongoose.Types.ObjectId, ref: "Evaluaciones" },
  Fecha: String,
  Hora: String,
  NotaMaxima: Number,
  NotaObtenida: Number
})

module.exports = {
  Estudiantes,
  Evaluaciones,
  Registros,
};