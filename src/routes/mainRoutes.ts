const express = require('express');
const { getMain } = require('../controllers/mainController');

const router = express.Router();

router.get('/', getMain);