const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SuperUserSchema = new Schema({
    userName: { type: String, default: '' },
    password: { type: String, default: '' },
    admin: { type: Boolean, default: true }
})

module.exports = mongoose.model('superUser', SuperUserSchema)