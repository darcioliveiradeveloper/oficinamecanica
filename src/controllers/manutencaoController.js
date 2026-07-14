// src/controllers/manutencaoController.js
import * as manutencaoService from '../services/manutencaoService.js';

// Criar Manutenção
export const createManutencao = async (req, res) => {
  try {
    const manutencao = await manutencaoService.createManutencao(req.body);
    res.status(201).json({
      message: 'Manutenção registrada com sucesso 🔧',
      data: manutencao
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar Manutenções
export const getManutencoes = async (req, res) => {
  try {
    const manutencoes = await manutencaoService.getManutencoes();
    if (manutencoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma manutenção cadastrada até o momento' });
    }
    res.json({
      message: 'Lista de manutenções encontradas',
      data: manutencoes
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Listar Manutenção por ID
export const getManutencaoById = async (req, res) => {
  try {
    const manutencao = await manutencaoService.getManutencaoById(req.params.id);
    if (!manutencao) {
      return res.status(404).json({ message: 'Manutenção não encontrada' });
    }
    res.json({
      message: 'Manutenção encontrada',
      data: manutencao
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar Manutenção
export const updateManutencao = async (req, res) => {
  try {
    const manutencao = await manutencaoService.updateManutencao(req.params.id, req.body);
    if (!manutencao) {
      return res.status(404).json({ message: 'Manutenção não encontrada' });
    }
    res.json({
      message: 'Dados da manutenção atualizados com sucesso ✅',
      data: manutencao
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar Manutenção
export const deleteManutencao = async (req, res) => {
  try {
    const manutencao = await manutencaoService.deleteManutencao(req.params.id);
    if (!manutencao) {
      return res.status(404).json({ message: 'Manutenção não encontrada' });
    }
    res.json({ message: 'Manutenção deletada com sucesso 🗑️' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar Manutenções por Veículo
export const getManutencoesByVeiculo = async (req, res) => {
  try {
    const manutencoes = await manutencaoService.getManutencoesByVeiculo(req.params.veiculoId);
    if (manutencoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma manutenção encontrada para este veículo' });
    }
    res.json({
      message: 'Lista de manutenções do veículo',
      data: manutencoes
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Buscar Manutenções por Oficina
export const getManutencoesByOficina = async (req, res) => {
  try {
    const manutencoes = await manutencaoService.getManutencoesByOficina(req.params.oficinaId);
    if (manutencoes.length === 0) {
      return res.status(404).json({ message: 'Nenhuma manutenção encontrada para esta oficina' });
    }
    res.json({
      message: 'Lista de manutenções da oficina',
      data: manutencoes
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};