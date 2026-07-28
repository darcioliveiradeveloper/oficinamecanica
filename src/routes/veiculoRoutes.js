import express from 'express';
import {
  createVeiculo,
  getVeiculos,
  getVeiculoById,
  updateVeiculo,
  deleteVeiculo
} from '../controllers/veiculoController.js';

const router = express.Router();

// Rotas CRUD Veículos
router.post('/', createVeiculo);
router.get('/', getVeiculos);
router.get('/:id', getVeiculoById);
router.put('/:id', updateVeiculo);
router.delete('/:id', deleteVeiculo);

export default router;

// Arquivo: veiculoRoutes.js | Modificado em: 27/07/2026
