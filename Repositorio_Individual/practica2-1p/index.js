const { mostrarEstudianteDeUnRegistro, mostrarEstudiante_Registro_Callbacks, mostrarEstudiante_Registro_Promises } = require('./funciones.js');

console.log("Funcion que muestra el estudiante del registro seleccionado:")
mostrarEstudianteDeUnRegistro(11);

console.log("\nFuncion con estructura Callback:")
mostrarEstudiante_Registro_Callbacks(12, function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Registro con ID ${data.registro.ID}:`);
    console.log(`- Fecha: ${data.registro.Fecha}`);
    console.log(`- Hora: ${data.registro.Hora}`);
    console.log(`- Nota máxima: ${data.registro.NotaMaxima}`);
    console.log(`- Nota obtenida: ${data.registro.NotaObtenida}`);

    console.log(`Estudiante relacionado:`);
    console.log(`- Nombre: ${data.estudiante.Nombre}`);
    console.log(`- Identificación: ${data.estudiante.Identificacion}`);
    console.log(`- Representante: ${data.estudiante.Representante}`);
    console.log(`- Curso: ${data.estudiante.Curso}`);
});

console.log("\nFuncion con estructura Promises:")
mostrarEstudiante_Registro_Promises(13);