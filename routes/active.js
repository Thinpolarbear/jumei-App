const e = require('express')
var express = require('express')
var router = express.Router()
var ControllerActive = require('../controller/active')


router.post('/activeAdd' , ControllerActive.activeAdd)
router.get('/activeList' , ControllerActive.activeList)
router.get('/activeFind' , ControllerActive.activeFind)
router.get('/activeUpdate' , ControllerActive.activeUpdate)
router.get('/activeRemove' , ControllerActive.activeRemove)
router.get('/list' , ControllerActive.list)

module.exports = router