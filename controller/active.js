var ActiveModel = require('../model/active')
var CountModel = require('../model/count')

var activeAdd = async (req,res,next) => {
  var body = req.body
  var {postId} =  await CountModel.findOneAndUpdate({}, { $inc : { postId : 1 } }, { upsert : true , new : true});
  var data = {
    ...body,
    postId
  }

  ActiveModel(data).save().then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : {}
      })
    }
  }).catch((err) => {
    console.log(err);
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : {}
    })
  })
}
var activeList = (req,res,next) => {
  var page = req.query.page;
  var count = 10;

  Promise.all([
    ActiveModel.find().sort({date : -1}).skip((page - 1) * count).limit(count),
    ActiveModel.find().count()
  ]).then((infos) => {
    if(infos){
      res.json({
        code : 0,
        errmsg : 'ok',
        info : infos[0],
        total : infos[1]
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : [],
        total : 0
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : [],
      total : 0
    })
  })
}
var activeFind = (req,res,next) => {
  var postId = req.query.postId
  ActiveModel.findOne({postId}).then((info) => {
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : {}
    })
  })
}
var activeUpdate = (req,res,next) => {
  var body = req.body
  ActiveModel.update({ postId : body.postId }, {$set : body}).then((info)=>{
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info 
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'update err',
        info : {}
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'update err',
      info : {}
    })
  })
}
var activeRemove = (req,res,next) => {
  var postId = req.query.postId;
  ActiveModel.deleteOne({ postId }).then((info)=>{
      if(info){
          res.json({
              code : 0,
              errmsg : 'ok',
              info
          });
      }
      else{
          res.json({
              code : -1,
              errmsg : 'remove err',
              info : null
          });
      }
  }).catch(()=>{
      res.json({
          code : -1,
          errmsg : 'remove err',
          info : null
      });
  });
}
var list = (req,res,next) => {
  var type = req.query.activeType
  ActiveModel.find({type}).sort({date : -1}).then((info) =>{
    if(info){
      res.json({
        code : 0,
        errmsg : 'ok',
        info
      })
    }else{
      res.json({
        code : -1,
        errmsg : 'nothing',
        info : []
      })
    }
  }).catch((err) => {
    res.json({
      code : -1,
      errmsg : 'nothing',
      info : []
    })
  })
}
module.exports = {
  activeAdd,
  activeList,
  activeFind,
  activeUpdate,
  activeRemove,
  list
}