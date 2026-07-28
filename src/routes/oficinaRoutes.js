import express from 'express';
import {
  createOficina,
  getOficinas,
  getOficinaById,
  updateOficina,
  deleteOficina
} from '../controllers/oficinaController.js';

const router = express.Router();

// Rotas CRUD Oficinas
router.post('/', createOficina);
router.get('/', getOficinas);
router.get('/:id', getOficinaById);
router.put('/:id', updateOficina);
router.delete('/:id', deleteOficina);

export default router;

// Arquivo: oficinaRoutes.js | Modificado em: 27/07/2026
