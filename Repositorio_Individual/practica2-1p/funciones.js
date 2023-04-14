
const { estudiantes, registros } = require('./data.js');

//busca y muestra uno de todos los elementos del arreglo de objetos transaccional y los datos de su entidad relacionada.
function mostrarEstudianteDeUnRegistro(idregistroAbuscar) {
    const registro = registros.find((t) => t.ID === idregistroAbuscar);
    if (!registro) {
        console.log(`No se encontró un registro con la ID ${idregistroAbuscar}`);
        return;
    }
    const estudiante = estudiantes.find((e) => e.ID === registro.ID_Estudiante);

    console.log(`Registro con la ID ${registro.ID}:`);
    console.log(`- Fecha: ${registro.Fecha}`);
    console.log(`- Hora: ${registro.Hora}`);
    console.log(`- Nota máxima: ${registro.NotaMaxima}`);
    console.log(`- Nota obtenida: ${registro.NotaObtenida}`);

    console.log(`Estudiante relacionado:`);
    console.log(`- Nombre: ${estudiante.Nombre}`);
    console.log(`- Identificación: ${estudiante.Identificacion}`);
    console.log(`- Representante: ${estudiante.Representante}`);
    console.log(`- Curso: ${estudiante.Curso}`);
}
//----------------------------------------------------------------------------------------------------------------------------------- 
// ESTRUCTURA CALLBACKS
function mostrarEstudiante_Registro_Callbacks(idregistroAbuscar_C, callback) {
    const registro = registros.find((t) => t.ID === idregistroAbuscar_C);

    if (!registro) {
        callback(`No se encontró una transacción con el ID ${idregistroAbuscar_C}`);
        return;
    }

    const estudiante = estudiantes.find((e) => e.ID === registro.ID_Estudiante);
    const respuesta = {
        registro,
        estudiante,
    };

    callback(null, respuesta);
}
//----------------------------------------------------------------------------------------------------------------------------------- 
// ESTRUCTURA PROMISES
function buscarRegistro(idregistro_P) {
    return new Promise((resolve, reject) => {
        const registro = registros.find((t) => t.ID === idregistro_P);

        if (!registro) {
            reject(`No se encontró una transacción con el ID ${idregistro_P}`);
            return;
        }
        resolve(registro);
    });
}

function buscarEstudiante(idEstudiante) {
    return new Promise((resolve, reject) => {
        const estudiante = estudiantes.find((e) => e.ID === idEstudiante);

        if (!estudiante) {
            reject(`No se encontró un estudiante con el ID ${idEstudiante}`);
            return;
        }

        resolve(estudiante);
    });
}
function mostrarEstudiante_Registro_Promises(idregistro_P) {
    buscarRegistro(idregistro_P)
        .then((registro) => {
            console.log(`Registro con ID ${registro.ID}:`);
            console.log(`- Fecha: ${registro.Fecha}`);
            console.log(`- Hora: ${registro.Hora}`);
            console.log(`- Nota máxima: ${registro.NotaMaxima}`);
            console.log(`- Nota obtenida: ${registro.NotaObtenida}`);

            return buscarEstudiante(registro.ID_Estudiante);
        })
        .then((estudiante) => {
            console.log(`Estudiante relacionado:`);
            console.log(`- Nombre: ${estudiante.Nombre}`);
            console.log(`- Identificación: ${estudiante.Identificacion}`);
            console.log(`- Representante: ${estudiante.Representante}`);
            console.log(`- Curso: ${estudiante.Curso}`);
        })
        .catch((error) => {
            console.error(error);
        });
}
//----------------------------------------------------------------------------------------------------------------------------------- 
module.exports = {
    mostrarEstudianteDeUnRegistro,
    mostrarEstudiante_Registro_Callbacks,
    mostrarEstudiante_Registro_Promises
};