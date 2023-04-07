function mostrarestudiantes(Estudiantes) {
    //ciclo for
    for (let i = 0; i < Estudiantes.length; i++) {
        console.log(Estudiantes[i]);
    }
    return "Estudiantes mostrados correctamente";
}

function mostrarevaluaciones(Evaluaciones) {
    //ciclo for ... in
    for (const evaluacion in Evaluaciones) {
        console.log(Evaluaciones[evaluacion]);
    }
    return "Evaluaciones mostrados correctamente";
}

function mostrarregistros(Registros) {
    // ciclo for ... of
    for (const registro of Registros) {
        console.log(registro);
    }
    return "Registros mostrados correctamente";
}
module.exports = {
    mostrarestudiantes,
    mostrarevaluaciones,
    mostrarregistros
};