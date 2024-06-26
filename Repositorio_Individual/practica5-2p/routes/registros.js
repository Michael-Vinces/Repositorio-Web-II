const { Router } = require('express')
const { check } =  require('express-validator')

const { 
    createRegistro,
    getRegistro, 
    getRegistros,
    updateRegistro,
    deleteRegistro 
} = require('../controllers').Registro;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/Registros/

router.get('/', getRegistros);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getRegistro);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createRegistro)

router.put('/:id', updateRegistro)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteRegistro)

module.exports = router;