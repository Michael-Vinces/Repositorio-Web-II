const estudiantes = [
    {
        ID: 1,
        Nombre: "Michael Vinces",
        Identificación: "1313198382",
        Representante: "Karina Cedeño",
        Curso: "Octavo semestre"
    },
    {
        ID: 2,
        Nombre: "Leonardo Andrade",
        Identificación: "1313112542",
        Representante: "Fabiola Andrade",
        Curso: "Noveno semestre"
    },
    {
        ID: 3,
        Nombre: "Cristian Bonilla",
        Identificación: "1313189782",
        Representante: "Carlos Cornejo",
        Curso: "Séptimo semestre"
    },
    {
        ID: 4,
        Nombre: "Jair Moreira",
        Identificación: "1313198747",
        Representante: "Roberto Cobeña",
        Curso: "Segundo semestre"
    },
    {
        ID: 5,
        Nombre: "Cristopher Chavez",
        Identificación: "1318748382",
        Representante: "Aaron Tejena",
        Curso: "Primer semestre"
    }];
//----------------------------------------------------------------------------------------------------------------------------------------------//
const evaluaciones = [
    {
        ID: 6,
        Nombre: "Examen final",
        Asignatura: "Programacion",
        Docente: "Ana Sánchez"
    },
    {
        ID: 7,
        Nombre: "Trabajo de investigación",
        Asignatura: "Web 3",
        Docente: "Pedro Rodríguez"
    },
    {
        ID: 8,
        Nombre: "Prueba escrita",
        Asignatura: "Software 4",
        Docente: "María Torres"
    },
    {
        ID: 9,
        Nombre: "Ejercicio práctico",
        Asignatura: "Enrutamiento",
        Docente: "Luis Gómez"
    },
    {
        ID: 10,
        Nombre: "Exposición oral",
        Asignatura: "Ingles",
        Docente: "Carlos Samaniego"
    }];
//----------------------------------------------------------------------------------------------------------------------------------------------//
const registros = [
    {
        ID: 11,
        ID_Estudiante: 1,
        ID_Evaluacion: 6,
        Fecha: "2022-01-15",
        Hora: "10:00 AM",
        NotaMaxima: 10,
        NotaObtenida: 8
    },
    {
        ID: 12,
        ID_Estudiante: 2,
        ID_Evaluacion: 7,
        Fecha: "2022-02-28",
        Hora: "2:00 PM",
        NotaMaxima: 20,
        NotaObtenida: 18
    },
    {
        ID: 13,
        ID_Estudiante: 3,
        ID_Evaluacion: 8,
        Fecha: "2022-03-10",
        Hora: "9:00 AM",
        NotaMaxima: 5,
        NotaObtenida: 3
    },
    {
        ID: 14,
        ID_Estudiante: 4,
        ID_Evaluacion: 9,
        Fecha: "2022-04-20",
        Hora: "11:00 AM",
        NotaMaxima: 10,
        NotaObtenida: 9
    },
    {
        ID: 15,
        ID_Estudiante: 5,
        ID_Evaluacion: 10,
        Fecha: "2022-05-05",
        Hora: "3:00 PM",
        NotaMaxima: 15,
        NotaObtenida: 14
    }];
//----------------------------------------------------------------------------------------------------------------------------------------------//

module.exports = {
    estudiantes,
    evaluaciones,
    registros
};