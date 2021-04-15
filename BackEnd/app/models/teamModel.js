const mongoose = require('mongoose');

module.exports = function () {
    const teamSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        start: {
            type: String,
            required: true
        },
        preference: {
            type: String,
            required: true
        },
        imagePerfil: {
            type: String,
            required: true
        }
    }, {
        toJSON: {
            virtuals: true
        }
    })
    teamSchema.virtual('imagePerfil_url').get(function () {
        return `http://localhost:8000/files/${this.imagePerfil}`
    })

    return mongoose.model('Team', teamSchema);
}();