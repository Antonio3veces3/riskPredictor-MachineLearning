const {Router} = require('express');
const { createAdmin, login } = require('../controller/auth.controller');
const { POSTPrediction, GETpredictions } = require('../controller/predictor.controller');

const router = Router();

router.post('/',[] ,POSTPrediction)
router.get('/:generacion/:orden',[],GETpredictions)

module.exports = router;