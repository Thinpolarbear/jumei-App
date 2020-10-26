var express = require('express');
var router = express.Router();
var ControllerAdmin = require('../controller/admin')

/* 用户登录注册 */
router.post('/login' , ControllerAdmin.login)
router.post('/register' , ControllerAdmin.register)
router.get('/info' , ControllerAdmin.info)

module.exports = router;