// src/controllers/oficinaController.js
import * as oficinaService from '../services/oficinaService.js';

// Criar Oficina
export const createOficina = async (req, res) => {
  try {
    const oficina = await oficinaService.createOficina(req.body);
    res.status(201).json({
      message: 'Oficina cadastrada com sucesso 🚀',
      data: oficina
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar Oficinas
export const getOficinas = async (req, res) => {
  try {
    const oficinas = await oficinaService.getOficinas();
    if (oficinas.length === 0) {
      return res.status(404).json({ message: 'Nenhuma oficina cadastrada até o momento' });
    }
    res.json({
      message: 'Lista de oficinas encontradas',
      data: oficinas
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Listar Oficina por ID
export const getOficinaById = async (req, res) => {
  try {
    const oficina = await oficinaService.getOficinaById(req.params.id);
    if (!oficina) {
      return res.status(404).json({ message: 'Oficina não encontrada' });
    }
    res.json({
      message: 'Oficina encontrada',
      data: oficina
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar Oficina
export const updateOficina = async (req, res) => {
  try {
    const oficina = await oficinaService.updateOficina(req.params.id, req.body);
    if (!oficina) {
      return res.status(404).json({ message: 'Oficina não encontrada' });
    }
    res.json({
      message: 'Dados da oficina atualizados com sucesso ✅',
      data: oficina
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar Oficina
export const deleteOficina = async (req, res) => {
  try {
    const oficina = await oficinaService.deleteOficina(req.params.id);
    if (!oficina) {
      return res.status(404).json({ message: 'Oficina não encontrada' });
    }
    res.json({ message: 'Oficina deletada com sucesso 🗑️' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Listar Veículos atendidos por uma Oficina
export const getVehiclesByOficina = async (req, res) => {
  try {
    const vehicles = await oficinaService.getVehiclesByOficina(req.params.id);
    if (vehicles === null) {
      return res.status(404).json({ message: 'Oficina não encontrada' });
    }
    if (vehicles.length === 0) {
      return res.status(404).json({ message: 'Nenhum veículo cadastrado para esta oficina no momento' });
    }
    res.json({
      message: 'Lista de veículos atendidos pela oficina',
      data: vehicles
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};