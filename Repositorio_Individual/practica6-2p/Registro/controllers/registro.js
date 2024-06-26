const { response } = require('express')
const { Registro } = require('../models')


const getRegistros= async (req, res = response )=>{

    //GET http://localhost:3000/Registros   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, printRegistros ] = await Promise.all([
        Registro.countDocuments(query),
        Registro.find(query)
        .populate('estudiante','name status')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      printRegistros
    })
    
}
const getRegistro= async (req, res =  response)=>{
    const {id} = req.params
    const registro=  await Registro.findById(id).populate('estudiante');
    res.json(registro);
}
const createRegistro= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existRegistro =  await Registro.findOne({name: body.name})

    if (existRegistro)
    {
        return res.status(400).json({
            msg:`El Registroo ${ existRegistro.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const registro = new Registro(data);

    const newRegistro =  await registro.save();
    res.status(201).json(newRegistro);
}
const updateRegistro= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedRegistro =  await Registro.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedRegistro);
}
const deleteRegistro= async (req, res = response)=>{
    const {id} = req.params;
    const deletedRegistro =  await Registro.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedRegistro);
}

module.exports = {
    getRegistro,
    getRegistros,
    createRegistro,
    updateRegistro,
    deleteRegistro
};