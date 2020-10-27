var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

var PostSchema = mongoose.Schema({
  goodsImage : { type : String , required : true },
  goodsName : { type : String , required : true },
  goodsNewPrice : { type : String , required : true },
  goodsOldPrice : { type : String , required : true},
  goodsType : { type : String , required : true },
  goodsShop : { type : String , required : true},
  postId : {type : Number , required : true },
  postDate : {type : Date , default : Date.now}
})

var PostModel = mongoose.model("postList" , PostSchema)

module.exports = PostModel