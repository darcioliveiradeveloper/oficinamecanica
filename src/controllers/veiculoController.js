// src/controllers/veiculoController.js
import * as veiculoService from '../services/veiculoService.js';

// Criar Veículo
export const createVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.createVeiculo(req.body);
    res.status(201).json({
      message: 'Veículo cadastrado com sucesso 🚗',
      data: veiculo
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar Veículos
export const getVeiculos = async (req, res) => {
  try {
    const veiculos = await veiculoService.getVeiculos();
    if (veiculos.length === 0) {
      return res.status(404).json({ message: 'Nenhum veículo cadastrado até o momento' });
    }
    res.json({
      message: 'Lista de veículos encontrados',
      data: veiculos
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Listar Veículo por ID
export const getVeiculoById = async (req, res) => {
  try {
    const veiculo = await veiculoService.getVeiculoById(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.json({
      message: 'Veículo encontrado',
      data: veiculo
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar Veículo
export const updateVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.updateVeiculo(req.params.id, req.body);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.json({
      message: 'Dados do veículo atualizados com sucesso ✅',
      data: veiculo
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar Veículo
export const deleteVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.deleteVeiculo(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.json({ message: 'Veículo deletado com sucesso 🗑️' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Listar Manutenções de um Veículo
export const getMaintenancesByVeiculo = async (req, res) => {
  try {
    const maintenances = await veiculoService.getMaintenancesByVeiculo(req.params.id);
    if (maintenances === null) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    if (maintenances.length === 0) {
      return res.status(404).json({ message: 'Nenhuma manutenção cadastrada para este veículo no momento' });
    }
    res.json({
      message: 'Lista de manutenções do veículo',
      data: maintenances
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};