const express = require('express');
const { createDivision ,getalldevision,updateDivision,deleteDivision,SingleDivision} = require('../controllers/divisonController');
//const { getallproduucts} = require('../controllers/productContollers');


const router = express.Router();

 router.route('/divisions').get(getalldevision);
 router.route('/divisions/new').post(createDivision);
 router.route('/divisions/:id').put(updateDivision).delete(deleteDivision)
 router.route('/single/:id').get(SingleDivision)
module.exports = router;
