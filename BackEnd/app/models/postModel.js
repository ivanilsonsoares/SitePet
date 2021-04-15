const mongoose = require('mongoose');
module.exports = function () {
    const schema = mongoose.Schema({
        title:{
          type: String,
          required: true  
        },
        content:{
            type: String,
            required: true  
          },
        image: {
            type: String,
            required: true  
          }
    }, {
        toJSON: {
            virtuals: true
        }
    });

    schema.virtual('image_url').get(function () {
        return `http://localhost:8000/files/${this.image}`
    })

    return mongoose.model('Post', schema);
}();
