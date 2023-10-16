const express = require('express');
const router = express.Router();
const path = require('path');

var crime = require('../Controllers/crimeController');

router.post('/registerFir',crime.registerFir);
router.post("/getFirDetails",crime.getfirdetails);
router.post("/status",crime.status);
router.post("/insertStatus",crime.insertStatus);
router.post("/policeStatus",crime.policeStatus);
router.post("/policeLogin",crime.policeLogin);
// router.post("/statusInProgress",crime.InProgress);
// router.post("/statusSolved",crime.Solved);

module.exports=router;