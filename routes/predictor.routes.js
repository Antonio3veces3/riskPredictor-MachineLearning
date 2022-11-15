const {Router} = require('express');
const { createAdmin, login } = require('../controller/auth.controller');
const { getPrediction } = require('../controller/predictor.controller');

const router = Router();

router.post('/',[] ,getPrediction)

module.exports = router;