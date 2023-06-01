const { response } = require('express');
const { Evaluacion } = require('../models');


const getEvaluaciones = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, printEvaluaciones ] = await Promise.all([
        Evaluacion.countDocuments(query),
        Evaluacion.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      printEvaluaciones
    })
}

const getEvaluacion = async (req, res= response)=>{
    const {id} = req.params
    const evaluacion=  await Evaluacion.findById(id);
    res.json(evaluacion);
}
const createEvaluacion = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existEvaluacion =  await Evaluacion.findOne({name: body.name})

    if (existEvaluacion)
    {
        return res.status(400).json({
            msg:`La Evaluacion ${ existEvaluacion.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const evaluacion= new Evaluacion(data);

    const newEvaluacion =  await evaluacion.save();
    res.status(201).json(newEvaluacion);
}
const updateEvaluacion = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const evaluacionUpdated =  await Evaluacion.findByIdAndUpdate(id,data, {new: true} )
    res.json(evaluacionUpdated);
}
const deleteEvaluacion =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedEvaluacion =  await Evaluacion.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedEvaluacion);
}

 module.exports ={
    createEvaluacion,
    getEvaluaciones,
    getEvaluacion,
    updateEvaluacion,
    deleteEvaluacion
 }