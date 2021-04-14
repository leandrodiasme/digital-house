const express = require('express');
const router = express.Router();
const LegendariesController = require('../controllers/LegendariesController')

/* GET home page. */
router.get('/',LegendariesController.index);

module.exports = router;
