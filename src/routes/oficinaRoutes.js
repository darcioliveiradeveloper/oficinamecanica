const express = require('express');
const router = express.Router();
const oficinaController = require('../controllers/oficinaController');

// Rotas CRUD Oficina
router.post('/', oficinaController.createOficina);
router.get('/', oficinaController.getOficinas);
router.put('/:id', oficinaController.updateOficina);
router.delete('/:id', oficinaController.deleteOficina);
router.get('/:id/vehicles', oficinaController.getVehiclesByOficina);

module.exports = router;
