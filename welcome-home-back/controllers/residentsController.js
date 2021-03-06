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

                        if (params.textMessageAuth === 'true') {
                            newResident.textMessageAuth = true
                        } else {
                            newResident.textMessageAuth = false
                        }

                        newResident.emergencyContact.name = params.emergencyContact.emgName
                        newResident.emergencyContact.address = params.emergencyContact.emgAddress
                        newResident.emergencyContact.number = params.emergencyContact.emgNumber

                        if (params.notifyMaintenance === 'true') {
                            newResident.notifyMaintenance = true
                        } else {
                            newResident.notifyMaintenance = false
                        }

                        if (params.notifyEvent === 'true') {
                            newResident.notifyEvent = true
                        } else {
                            newResident.notifyEvent = false
                        }

                        newResident.altMailing.name = params.altMailing.name
                        newResident.altMailing.address = params.altMailing.address
                        newResident.altMailing.city = params.altMailing.city
                        newResident.altMailing.state = params.altMailing.state
                        newResident.altMailing.zip = params.altMailing.zip
                        newResident.insurance.type = params.insurance.type
                        newResident.insurance.company = params.insurance.company
                        newResident.insurance .policyNumber = params.insurance.policy
                        newResident.insurance.liabilityCoverage = params.insurance.liability
                        newResident.insurance.propertyCoverage = params.insurance.property
                        newResident.resident = true
                        newResident.password = 'WelcomeHome'
                        newResident.save()
                            .then(createdResident => {
                                resolve(createdResident)
                            })
                            .catch(err => reject(err))
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