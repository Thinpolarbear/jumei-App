var UserModel = require('../model/user')
var jwt = require('jsonwebtoken')

var register = (req,res,next) => {
   var body = req.body
   console.log(body);
   UserModel(body).save().then((info) => {
     if(info){
       res.json({
         code : 0,
         errmsg : 'ok',
         info
       })
     }else{
      res.json({
        code : -1,
        errmsg : 'register err',
        info : {}
      })
     }
   }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'register err',
      info : {}
    })
   })
}
var login = (req,res,next) => {
  var body = req.body
  UserModel.findOne(body).then((info) => {
    if(info){

      jwt.sign({
        username : body.username
      } , 'abcdefg' , {expiresIn : 60 * 60 * 3 } , (err , token) => {
        res.json({
          code : 0,
          errmsg : 'ok',
          info,
          token
        })
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'login err',
        info,
        token : null
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'login err',
      info,
      token : null
    })
  })
}
var info = (req,res,next) => {
  var token = req.headers.token
  jwt.verify(token , 'abcdefg' , (err , info) => {
    if(err){
      res.json({
        code : -1,
        errmag : 'token错误'
      })
    }else{
      res.json({
        code : 0,
        errmag : 'token正确',
        username : info.username
      })
    }
  })
}
module.exports = {
  register,
  login,
  info
}