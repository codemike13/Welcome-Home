const Resident = require('../models/Resident')
const Reception = require('../models/Reception')
const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')

module.exports = {
    login: (params) => {
        return new Promise((resolve, reject) => {
            console.log(params);
            if (params.email === '' || params.password === '') {
                let error = {
                    status: 500,
                    message: "Email and/or password field cannot be blank"
                }
                return reject(error)
            }
            Resident.findOne({email: params.email})
                .then(resident => {
                    if (resident) {
                        bcrypt.compare(params.password, resident.password)
                            .then(isMatch => {
                                if (isMatch) {
                                    let payload = {
                                        id: resident._id,
                                        email: resident.email
                                    }
                                    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 }, (err, token) => {
                                        if (err) {
                                            reject(err)
                                        } else {
                                            let success = {}
                                            success.confirmation = true
                                            success.token = `Bearer ${token}`
                                            resolve(success)
                                        }
                                    })
                                }
                            })
                            .catch(err => reject(err))
                    } else if (!resident) {
                        Reception.findOne({email: params.email})
                            .then(reception => {
                                if (reception) {
                                    bcrypt.compare(params.password, reception.password)
                                        .then(isMatch => {
                                            if (isMatch) {
                                                let payload = {
                                                    id: reception._id,
                                                    email: reception.email
                                                }
                                                jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 }, (err, token) => {
                                                    if (err) {
                                                        reject(err)
                                                    } else {
                                                        let success = {}
                                                        success.confirmation = true
                                                        success.token = `Bearer ${token}`
                                                        resolve(success)
                                                    }
                                                })
                                            }}
                                        )
                                        .catch(err => reject(err))
                                } else if (!reception) {
                                    Admin.findOne({ email: params.email })
                                        .then(admin => {
                                            if (admin) {
                                                bcrypt.compare(params.password, admin.password)
                                                    .then(isMatch => {
                                                        if(isMatch) {
                                                            let payload = {
                                                                id: admin._id,
                                                                email: admin.email
                                                            }
                                                            jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 }, (err, token) => {
                                                                if (err) {
                                                                    reject(err)
                                                                } else {
                                                                    let success = {}
                                                                    success.confirmation = true
                                                                    success.token = `Bearer ${token}`
                                                                    resolve(success)
                                                                }
                                                            })
                                                        }
                                                    })
                                                    .catch(err => reject(err))
                                            } else if (!admin) {
                                                let error = {
                                                    status: 500,
                                                    message: 'No user found. Please check email/password'
                                                }
                                                reject(error)
                                            }
                                        })
                                }
                            })
                            .catch(err => (err))
                    }
                })
                .catch(() => {
                    let error = {
                        status: 500,
                        message: "Error finding Resident account"
                    }
                    return reject(error)
                })
        })
    }
}