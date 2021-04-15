const mongoose = require('mongoose');

module.exports = function(){
    const schemaProjects = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        type:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        imageProject:{
            type: String,
            required: true
        }
    }, {
        toJSON:{
            virtuals: true
        }
    });

    schemaProjects.virtual('imageProject_url').get(function () {
        return `http://localhost:8000/files/${this.imageProject}`
    })
    return mongoose.model('Projects', schemaProjects);
}();