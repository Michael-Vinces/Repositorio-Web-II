
const { estudiantes, evaluaciones, registros } = require('./arrays.js');
const { mostrarestudiantes, mostrarevaluaciones, mostrarregistros } = require('./Funciones.js');

console.log("\nLista de estudiantes:");
console.log(mostrarestudiantes(estudiantes));
console.log("\nLista de evaluaciones:");
console.log(mostrarevaluaciones(evaluaciones));
console.log("\nLista de registros:");
console.log(mostrarregistros(registros));
