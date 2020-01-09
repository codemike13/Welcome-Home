const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceptionSchema = new Schema({
    userName: { type: String, default: '' },
    password: { type: String, default: '' },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '', unique: true },
    contactNumber: { type: Number, default: '' },
    reception: { type: Boolean, default: true }
})

module.exports = mongoose.model('reception', ReceptionSchema)