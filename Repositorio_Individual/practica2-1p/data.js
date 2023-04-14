const estudiantes = [
    {
        ID: 1,
        Nombre: "Michael Vinces",
        Identificacion: "1313198382",
        Representante: "Karina Cedeño",
        Curso: "Octavo semestre"
    },
    {
        ID: 2,
        Nombre: "Leonardo Andrade",
        Identificacion: "1313112542",
        Representante: "Fabiola Andrade",
        Curso: "Noveno semestre"
    },
    {
        ID: 3,
        Nombre: "Cristian Bonilla",
        Identificacion: "1313189782",
        Representante: "Carlos Cornejo",
        Curso: "Séptimo semestre"
    },
    {
        ID: 4,
        Nombre: "Jair Moreira",
        Identificacion: "1313198747",
        Representante: "Roberto Cobeña",
        Curso: "Segundo semestre"
    },
    {
        ID: 5,
        Nombre: "Cristopher Chavez",
        Identificacion: "1318748382",
        Representante: "Aaron Tejena",
        Curso: "Primer semestre"
    }];
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
    registros
};