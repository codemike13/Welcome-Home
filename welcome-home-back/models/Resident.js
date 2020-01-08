const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResidentSchema = new Schema({
    firstName: { type: String, default: String },
    middleName: { type: String, default: '' },
    lastName: { type: String, default: String },
    password: { type: String, default: '' },
    email: { type: String, default: '', unique: true },
    unit: { type: Number, default: Number },
    homeNumber: { type: Number, default: '' },
    cellNumber: { type: Number, default: '' },
    workNumber: { type: Number, default: '' },
    faxNumber: { type: Number, default: '' },
    textMessage: { type: Boolean, default: false },
    emergencyContact: { type: String, default: '' },
    notifyMaintenance: { type: Boolean, default: true },
    notifyEvent: { type: Boolean, default: true },
    altMailing: {
        name: { type: String, default: '' },
        addressOne: { type: String, default: '' },
        addressTwo: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        zip: { type: Number, default: '' }
    },
    insurance: {
        type: { type: String, default: '' },
        company: { type: String, default: '' },
        policyNumber: { type: String, default: '' },
        liabilityCoverage: { type: Number, default: '' },
        propertyCoverage: { type: Number, default: '' }
    }
})

module.exports = mongoose.model('resident', ResidentSchema)