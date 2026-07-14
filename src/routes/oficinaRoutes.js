import express from 'express';
import * as oficinaController from '../controllers/oficinaController.js'; // Note o .js no final

const router = express.Router();

// Rotas CRUD Oficinas
router.post('/', oficinaController.createOficina);
router.get('/', oficinaController.getOficinas);
router.get('/:id', oficinaController.getOficinaById);
router.put('/:id', oficinaController.updateOficina);
router.delete('/:id', oficinaController.deleteOficina);

// Exportação moderna compatível com o index.js
export default router;