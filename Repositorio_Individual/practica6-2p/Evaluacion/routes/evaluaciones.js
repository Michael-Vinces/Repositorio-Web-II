const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createEvaluacion,
    getEvaluaciones,
    getEvaluacion,
    updateEvaluacion,
    deleteEvaluacion
} = require('../controllers').Evaluacion;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getEvaluaciones );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getEvaluacion );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createEvaluacion);


 router.put('/:id', updateEvaluacion);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteEvaluacion);



module.exports = router;