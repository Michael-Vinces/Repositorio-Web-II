const { response } = require('express');
const { Estudiante } = require('../models');


const getEstudiantes = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, printEstudiantes ] = await Promise.all([
        Estudiante.countDocuments(query),
        Estudiante.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      printEstudiantes
    })
}

const getEstudiante = async (req, res= response)=>{
    const {id} = req.params
    const estudiante=  await Estudiante.findById(id);
    res.json(estudiante);
}
const createEstudiante = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existEstudiante =  await Estudiante.findOne({name: body.name})

    if (existEstudiante)
    {
        return res.status(400).json({
            msg:`La categoria ${ existeCategoria.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const estudiante = new Estudiante(data);

    const newEstudiante =  await estudiante.save();
    res.status(201).json(newEstudiante);
}
const updateEstudiante = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const estudianteUpdated =  await Estudiante.findByIdAndUpdate(id,data, {new: true} )
    res.json(estudianteUpdated);
}
const deleteEstudiante =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedEstudiante =  await Estudiante.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedEstudiante);
}

 module.exports ={
    createEstudiante,
    getEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante
 }