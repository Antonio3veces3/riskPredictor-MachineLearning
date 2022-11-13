const {Router} = require('express');
const { createAdmin, login } = require('../controller/auth.controller');

const router = Router();

router.post('/',[] ,createAdmin)
router.post('/login',[],login)
module.exports = router;