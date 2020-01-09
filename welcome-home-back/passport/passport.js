const Jwtstrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Resident = require('../models/Resident')
const Reception = require('../models/Reception')
const Admin = require('../models/Admin')

const key = process.env.SECRET_KEY || 'defaultSecretKey'

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = key

module.exports = passport => {
    passport.use(new Jwtstrategy(opts, (jwt_payload, done) => {
        Resident.findById(jwt_payload.id)
            .then(resident => {
                if (resident) {
                    return done(null, user)
                } else if (!resident) {
                    Reception.findById(jwt.passport.id)
                        .then(reception => {
                            return done(null, reception)
                        })
                        .catch(err => console.log(err))
                } else if (!resident && !reception) {
                    Admin.findById(jwt_payload.id)
                        .then(admin => {
                            return done(null, admin)
                        })
                        .catch(err => console.log(err))
                } else {
                    return done(null, false)
                }
            })
            .catch(error => console.log(error))
    }))
}