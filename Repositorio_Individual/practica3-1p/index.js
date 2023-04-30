const mongoose = require('mongoose');
const { Estudiantes, Evaluaciones, Registros } = require('./models');
const conneccionURL = "mongodb+srv://Michael-Vinces:Michael-Vince@cluster0.magwd2x.mongodb.net/registros";


// un estudiante puede tener una evaluacion al mismo tiempo
// una evaluacion puede tener un estudiante
// un registro puede tener una evaluacion y puede tener muchos estudiantes


(async () => {
    try {
        const estadoDeLaConexion = await mongoose.connect(conneccionURL) // Conexión a la BD
        const estudiante1 = new Estudiantes({
            Nombre: "Michael Vinces",
            Identificacion: "1313198382",
            Representante: "Karina Cedeño",
            Curso: "Octavo semestre"
        })
        const estudiante2 = new Estudiantes({
            Nombre: "Leonardo Andrade",
            Identificacion: "1313112542",
            Representante: "Fabiola Andrade",
            Curso: "Noveno semestre"
        })
        const guardaEstudiante1 = await estudiante1.save()
        const guardaEstudiante2 = await estudiante2.save()
        //-----------------------------------------------------------------------------------------------
        const evaluacion1 = new Evaluaciones({
            Nombre: "Examen final",
            Asignatura: "Programacion",
            Docente: "Ana Sánchez"
        })
        const evaluacion2 = new Evaluaciones({
            Nombre: "Trabajo de investigación",
            Asignatura: "Web 3",
            Docente: "Pedro Rodríguez"
        })
        const guardaEvaluacion1 = await evaluacion1.save()
        const guardaEvaluacion2 = await evaluacion2.save()
        //-----------------------------------------------------------------------------------------------
        const registro1 = new Registros({
            ID_Estudiante: [
                { ID_Estudiante: guardaEstudiante1._id },
                { ID_Estudiante: guardaEstudiante2._id }
            ],
            ID_Evaluacion: evaluacion1._id,
            Fecha: "2022-01-15",
            Hora: "10:00 AM",
            NotaMaxima: 10,
            NotaObtenida: 8
        })
        const registro2 = new Registros({
            ID_Estudiante: estudiante1._id,
            ID_Evaluacion: evaluacion2._id,
            Fecha: "2022-02-28",
            Hora: "2:00 PM",
            NotaMaxima: 20,
            NotaObtenida: 18
        })
        const guardaRegistro1 = await registro1.save()
        const guardaRegistro2 = await registro2.save()
        //-----------------------------------------------------------------------------------------------
    } catch (error) {
        console.log(error);
    }

    // CRUD que incluye CREAR, ACTUALIZAR, ELIMINAR Y MOSTRAR para Estudiantes
    const crearEstudiante = async (x) => {
        const nuevoEstudiante = new Estudiantes(x)
        try {
            const estudianteGuardado = await nuevoEstudiante.save()
            console.log("Estudiante creado:", estudianteGuardado)
        } catch (error) {
            console.log(error)
        }
    };
    const actualizarEstudiante = async (id, nuevosDatos) => {
        try {
            const estudianteActualizado = await Estudiantes.findByIdAndUpdate(
                id,
                nuevosDatos,
                { new: true }
            )
            console.log("Estudiante actualizado:", estudianteActualizado)
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarEstudiante = async (id) => {
        try {
            const estudianteEliminado = await Estudiantes.findByIdAndDelete(id)
            console.log("Estudiante eliminado:", estudianteEliminado)
        } catch (error) {
            console.log(error)
        }
    }
    const leerEstudiantes = async () => {
        try {
            const estudiantes = await Estudiantes.find()
            console.log("Lista de estudiantes:", estudiantes)
        } catch (error) {
            console.log(error)
        }
    }


    // Ejecutar los CRUDS de estudiantes
    const nuevoEstudiante = {
        Nombre: "María Pérez",
        Identificacion: "1234567890",
        Representante: "Juan Pérez",
        Curso: "Noveno semestre",
    };
    //await crearEstudiante(nuevoEstudiante);
    const idEstudianteActualizar = "644cad834cbe0cb36a4994f9";
    const estudianteActualizar = {
        Curso: "Primer semestre",
    };
    //await actualizarEstudiante(idEstudianteActualizar,estudianteActualizar)
    const idEstudianteEliminar = "644cad844cbe0cb36a499508";
    //await eliminarEstudiante(idEstudianteEliminar)
    //await leerEstudiantes()

    // CRUD que incluye CREAR, ACTUALIZAR, ELIMINAR Y MOSTRAR para Estudiantes
    const crearEvaluacion = async (x) => {
        const nuevaEvaluacion = new Evaluaciones(x)
        try {
            const evaluacionGuardado = await nuevaEvaluacion.save()
            console.log("Evaluacion creado:", evaluacionGuardado)
        } catch (error) {
            console.log(error)
        }
    };
    const actualizarEvaluacion = async (id, nuevosDatos) => {
        try {
            const evaluacionActualizado = await Evaluaciones.findByIdAndUpdate(
                id,
                nuevosDatos,
                { new: true }
            )
            console.log("Evaluacion actualizado:", evaluacionActualizado)
        } catch (error) {
            console.log(error)
        }
    }
    const eliminarEvaluacion = async (id) => {
        try {
            const evaluacionEliminado = await Evaluaciones.findByIdAndDelete(id)
            console.log("Evaluacion eliminado:", evaluacionEliminado)
        } catch (error) {
            console.log(error)
        }
    }
    const leerEvaluaciones = async () => {
        try {
            const evaluaciones = await Evaluaciones.find()
            console.log("Lista de evaluaciones:", evaluaciones)
        } catch (error) {
            console.log(error)
        }
    }

    // Ejecutar los CRUDS de Evaluaciones

    const nuevaEvaluacion = {
        Nombre: "Trabajo de investigación",
        Asignatura: "Web 4",
        Docente: "Boyeate"
    };
    //await crearEvaluacion(nuevaEvaluacion);
    const idEvaluacionActualizar = "644cafaa0a90d25913f7c235";
    const EvaluacionActualizar = {
        Docente: "Cristian Boyo",
    };
    //await actualizarEvaluacion(idEvaluacionActualizar,EvaluacionActualizar)
    const idEvaluacionEliminar = "644cafaa0a90d25913f7c235";
    //await eliminarEvaluacion(idEvaluacionEliminar)
    //await leerEvaluaciones()


    // CRUD que incluye CREAR, ACTUALIZAR, ELIMINAR Y MOSTRAR de la entidad transaccional Registro
    const crearRegistro = async (registro) => {
        const nuevoRegistro = new Registros(registro)
        try {
            const estudiante = await Estudiantes.findById(registro.ID_Estudiante)
            const evaluacion = await Evaluaciones.findById(registro.ID_Evaluacion)

            if (!estudiante || !evaluacion) {
                console.log("Estudiante o evaluación no encontrados")
                return
            }

            nuevoRegistro.Nombre = estudiante.Nombre
            nuevoRegistro.Asignatura = evaluacion.Asignatura
            nuevoRegistro.Docente = evaluacion.Docente

            const registroGuardado = await nuevoRegistro.save()
            console.log("Registro creado:", registroGuardado)
        } catch (error) {
            console.log(error)
        }
    }
    const Estudianteprueba = {
        _id: "644cafa90a90d25913f7c226"
    }
    const Evaluacionprueba = {
        _id: "644cafaa0a90d25913f7c22a"
    }
    const nuevoRegistro = {
        ID_Estudiante: Estudianteprueba,
        ID_Evaluacion: Evaluacionprueba,
        Fecha: "2022-02-28",
        Hora: "2:00 PM",
        NotaMaxima: 100,
        NotaObtenida: 18
    }
    await crearRegistro(nuevoRegistro)



    const leerRegistros = async () => {
        try {
            const registros = await Registros.find()
            console.log("Registros:", registros)
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarRegistro = async (id, nuevosDatos) => {
        try {
            const registroActualizado = await Registros.findByIdAndUpdate(
                id,
                nuevosDatos,
                { new: true }
            )
            console.log("Registro actualizado:", registroActualizado)
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarRegistro = async (id) => {
        try {
            const registroEliminada = await Registros.findByIdAndDelete(id)
            console.log("Registro eliminado:", registroEliminada)
        } catch (error) {
            console.log(error)
        }
    }


    // Ejecutar los CRUDS de la entidad transaccional Registros
    //await leerRegistros()

    const idRegistroActualizar = "61655ba38d5705f3e9be7c0f"
    const nuevosDatos = {
        Fecha: "2023-04-28",
        Hora: "2:00 PM"
    }
    //await actualizarTransaccion(idRegistroActualizar, nuevosDatos)

    const idRegistroEliminar = "61655ba38d5705f3e9be7c0f"
    //await eliminarRegistro(idRegistroEliminar)

    // Listar estudiantes con for
    const estudiantes = await Estudiantes.find()
    for (let i = 0; i < estudiantes.length; i++) {
        console.log(estudiantes[i])
    }

    // Listar evaluaciones con forEach
    const evaluaciones = await Evaluaciones.find()
    evaluaciones.forEach((evaluacion) => console.log(evaluacion))

    // Listar registros con for...in

    const registros = await Registros.find().populate("ID_Evaluacion").populate("ID_Estudiante.ID_Estudiante.nombre");

    //se recorre el arreglo mediante for
    for (const registro in registros) {
        console.log(registros[registro])
    }
})();