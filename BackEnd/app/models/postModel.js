var mongoose = require('mongoose');
module.exports = function(){
   var schema = mongoose.Schema({
       title: {
           type:String,
           required: true
       },
       content: {
           type: String,
           required: true
       }
   });
   return mongoose.model('Post', schema);
}();
