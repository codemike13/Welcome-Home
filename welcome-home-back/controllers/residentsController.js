const Resident = require('../models/Resident')
const bcrypt = require('bcryptjs')

module.exports = {
    newResident: (params) => {
        return new Promise((resolve, reject) => {
            Resident.findOne({ email: params.email })
                .then(resident => {
                    if (resident) {
                        const error = {
                            status: 500,
                            message: 'Resident account already exists'
                        }
                        reject(error)
                    } else {
                        newResident = new Resident
                        newResident.firstName = params.firstName
                        newResident.middleName = params.middleName
                        newResident.lastName = params.lastName
                        newResident.email = params.email
                        newResident.unit = params.unit
                        newResident.homeNumber = params.homeNumber
                        newResident.cellNumber = params.cellNumber
                        newResident.workNumber = params.workNumber
                        newResident.faxNumber = params.faxNumber
                        newResident.textMessageAuth = params.textMessageAuth
                        newResident.emergencyContact = params.emergencyContact
                        newResident.notifyMaintenance = params.notifyMaintenance
                        newResident.notifyEvent = params.notifyEvent
                        newResident.altMailing.name = params.altMailingName
                        newResident.altMailing.addressOne = params.altMailingAddressOne
                        newResident.altMailing.addressTwo = params.altMailingAddressTwo
                        newResident.altMailing.city = params.altMailingCity
                        newResident.altMailing.state = params.altMailingState
                        newResident.altMailing.zip = params.altMailingZip
                        newResident.insurance.type = params.insuranceType
                        newResident.insurance.company = params.insuranceCompany
                        newResident.insurance .policyNumber = params.insurancePolicyNumber
                        newResident.insurance.liabilityCoverage = params.insuranceLiabilityCoverage
                        newResident.insurance.propertyCoverage = params.insurancePropertyCoverage
                        bcrypt.genSalt(10, function(err, salt) {
                            if (err) {
                                let error = {
                                    status: 500,
                                    message: 'Error generating salt for password encryption'
                                }
                                reject(error)
                                
                            } else {
                                bcrypt.hash(params.password, salt, function(err, hash) {
                                    if (err) {
                                        let error = {
                                            status: 500,
                                            message: 'Enable to hash password: Internal sever error'
                                        }
                                        reject(error)
                                    }
                                    newResident.password = hash
                                    newResident.save()
                                        .then(createdResident => {
                                            resolve(createdResident)
                                        })
                                        .catch(err => {
                                            let error = {
                                                status: 500,
                                                message: 'Unable to save password: Internal sever error'
                                            }
                                            reject(error)
                                        })
                                })
                            }
                        })
                    }
                })
                .catch(err => reject(err))
        })
    },

    updateResident: (params) => {
        //TODO
    },

    deleteResident: (params) => {
        //TODO
    }
}