const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Rotas CRUD Veículo
router.post('/', veiculoController.createVeiculo);
router.get('/', veiculoController.getVeiculos);
router.put('/:id', veiculoController.updateVeiculo);
router.delete('/:id', veiculoController.deleteVeiculo);
router.get('/:id/maintenances', veiculoController.getMaintenancesByVeiculo);

module.exports = router;

