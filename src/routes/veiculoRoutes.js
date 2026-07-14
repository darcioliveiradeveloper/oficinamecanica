import express from 'express';
import * as veiculoController from '../controllers/veiculoController.js'; // Note o .js no final

const router = express.Router();

// Rotas CRUD Veículos
router.post('/', veiculoController.createVeiculo);
router.get('/', veiculoController.getVeiculos);
router.get('/:id', veiculoController.getVeiculoById);
router.put('/:id', veiculoController.updateVeiculo);
router.delete('/:id', veiculoController.deleteVeiculo);

// Exportação moderna compatível com o index.js
export default router;