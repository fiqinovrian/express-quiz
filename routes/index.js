const express = require('express');
const router = express.Router();
const perhitungan = require('../controllers').perhitungan;

router.get('/getAllHistory', perhitungan.getAllHistory);
router.post('/perhitungan', perhitungan.hitung);

module.exports = router;