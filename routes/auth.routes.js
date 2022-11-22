const {Router} = require('express');
const { createAdmin, login } = require('../controller/auth.controller');

const router = Router();

router.post('/create',[] ,createAdmin)
router.post('/login',[],login)
module.exports = router;