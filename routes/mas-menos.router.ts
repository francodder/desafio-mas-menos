import { Router } from 'express'
const { masMenos } = require('../controllers/mas-menos.controller')
const { sendNotAllowed } = require('./response')
const router = Router()

router.post('/', masMenos)

// Métodos no permitidos
router.get('/', sendNotAllowed)
router.put('/', sendNotAllowed)
router.patch('/', sendNotAllowed)
router.delete('/', sendNotAllowed)

module.exports = router