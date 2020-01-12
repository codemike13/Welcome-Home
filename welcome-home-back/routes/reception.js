const express = require('express');
const router = express.Router();
const receptionController = require('../controllers/receptionController')
const residentController = require('../controllers/residentsController')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/createresident', (req, res) => {
    console.log(`GOT TO BACK END`);
    residentController.newResident(req.body)
        .then()
        .catch()
})

module.exports = router;