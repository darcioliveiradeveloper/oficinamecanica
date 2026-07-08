const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');

// Rotas CRUD Manutenção
router.post('/manutencoes', manutencaoController.create);

//// /router.post('/', manutencaoController.createManutencao);
router.get('/', manutencaoController.getManutencoes);
router.get('/:id', manutencaoController.getManutencaoById);
router.put('/:id', manutencaoController.updateManutencao);
router.delete('/:id', manutencaoController.deleteManutencao);

// Rotas adicionais
router.get('/veiculo/:veiculoId', manutencaoController.getManutencoesByVeiculo);
router.get('/oficina/:oficinaId', manutencaoController.getManutencoesByOficina);

module.exports = router;

