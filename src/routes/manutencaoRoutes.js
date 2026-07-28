import express from 'express';
import {
  createManutencao,
  getManutencoes,
  getManutencaoById,
  updateManutencao,
  deleteManutencao,
  getManutencoesByVeiculo,
  getManutencoesByOficina
} from '../controllers/manutencaoController.js';

const router = express.Router();

// Rotas CRUD Manutenção
router.post('/', createManutencao);
router.get('/', getManutencoes);
router.get('/:id', getManutencaoById);
router.put('/:id', updateManutencao);
router.delete('/:id', deleteManutencao);

// Rotas de filtragem adicionais
router.get('/veiculo/:veiculoId', getManutencoesByVeiculo);
router.get('/oficina/:oficinaId', getManutencoesByOficina);

export default router;

// Arquivo: manutencaoRoutes.js | Modificado em: 27/07/2026
