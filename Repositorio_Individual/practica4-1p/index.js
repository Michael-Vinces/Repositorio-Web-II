const cors=require("cors")
const express=require("express")
const { estudiantes} = require('./arrays.js');

const app=express();
const Puerto=8080;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


//Metodo GET 
//Mostrará la informacion de todos los estudiantes

app.get('/estudiantes/all', (req,res)=>{
    res.status(200).send(
        estudiantes
    );
})

//Metodo GET 
//Mediante una id podemos visualizar la informacion de un estudiante en especifico

app.get('/estudiantes/:id', (req, res) => {
    const id=parseInt(req.params.id)
    const estudiante = estudiantes.find(d => d.ID === id);
    if (!estudiante) {
        res.status(404).send({message:`El estudiante con la ID ${parseInt(req.params.id)} no se encontró en el sistema.`});
        return;
      }
      res.status(200).send(estudiante);
});

//Metodo POST 
//Añade un nuevo estudiante a nuestro sistema

app.post('/estudiantes/nuevoestudiante', (req,res)=>{
    const {body} = req;
    estudiantes.push(body);
    res.status(200).send({
        message:"El estudiante se fue ingresado al sistema con éxito.",
        response: body
    });
});

//Metodo PUT 
//Modifica los campos de representante y curso del estudiante cuya id se pase como parametro

app.put('/estudiantes/modificar/:id', (req,res)=>{
    const {ID, Representante,Curso} = req.body;
    
    let estudiante =  estudiantes.filter(p=> p.ID === ID)[0] || {}

    estudiante.Representante=Representante;
    estudiante.Curso=Curso;
    res.status(200).send(
        {
            message:`El estudiante con la ID ${ID} fue modificado con éxito.`,
            response: estudiante
        }
    );
});

//Metodo DELETE 
// Elimina el estudiante de la ID que se le pase como parametro

app.delete('/estudiantes/eliminar/:id', (req, res) => {
    const index = estudiantes.findIndex(d => d.ID === parseInt(req.params.id));
    estudiantes.splice(index, 1);
    res.status(200).send({
        message: `El estudiante con la ID ${parseInt(req.params.id)} fue eliminado con éxito.`,
    });
});

app.listen(Puerto, ()=>{
    console.log(`El servidor esta funcionando http://localhost:${Puerto}`)
});
