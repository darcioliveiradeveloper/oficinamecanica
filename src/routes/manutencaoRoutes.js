import express from 'express';
import * as manutencaoController from '../controllers/manutencaoController.js'; // Lembre-se de adicionar o .js no final do caminho

const router = express.Router();

// Rotas CRUD Manutenção
router.post('/', manutencaoController.createManutencao);
router.get('/', manutencaoController.getManutencoes);
router.get('/:id', manutencaoController.getManutencaoById);
router.put('/:id', manutencaoController.updateManutencao);
router.delete('/:id', manutencaoController.deleteManutencao);

// Rotas de filtragem adicionais
router.get('/veiculo/:veiculoId', manutencaoController.getManutencoesByVeiculo);
router.get('/oficina/:oficinaId', manutencaoController.getManutencoesByOficina);

// Exportação moderna (ES Module) compatível com o seu index.js
export default router;