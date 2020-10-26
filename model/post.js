var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

var PostSchema = mongoose.Schema({
  goodsImage : { type : String , required : true },
  goodsName : { type : String },
  goodsNewPrice : { type : String },
  goodsOldPrice : { type : String },
  goodsType : { type : String , required : true },
  postId : {type : Number , required : true },
  goodsShop : { type : String },
  postDate : {type : Date , default : Date.now}
})

var PostModel = mongoose.model("postList" , PostSchema)

module.exports = PostModel