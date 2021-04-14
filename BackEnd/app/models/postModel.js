const mongoose = require('mongoose');
module.exports = function () {
    const schema = mongoose.Schema({
        title: String,
        content: String,
        image: String
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
