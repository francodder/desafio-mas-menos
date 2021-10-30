"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { masMenos } = require('../controllers/mas-menos.controller');
const { sendNotAllowed } = require('./response');
const router = (0, express_1.Router)();
router.post('/', masMenos);
// Métodos no permitidos
router.get('/', sendNotAllowed);
router.put('/', sendNotAllowed);
router.patch('/', sendNotAllowed);
router.delete('/', sendNotAllowed);
module.exports = router;
