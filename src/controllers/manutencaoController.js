import {
  createManutencao as createManutencaoService,
  getManutencoes as getManutencoesService,
  getManutencaoById as getManutencaoByIdService,
  updateManutencao as updateManutencaoService,
  deleteManutencao as deleteManutencaoService,
  getManutencoesByVeiculo as getManutencoesByVeiculoService,
  getManutencoesByOficina as getManutencoesByOficinaService
} from '../services/manutencaoService.js';

// Criar Manutenção
export const createManutencao = async (req, res) => {
  try {
    const manutencao = await createManutencaoService(req.body);
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
    const manutencoes = await getManutencoesService();
    if (!manutencoes || manutencoes.length === 0) {
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
    const manutencao = await getManutencaoByIdService(req.params.id);
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
    const manutencao = await updateManutencaoService(req.params.id, req.body);
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
    const manutencao = await deleteManutencaoService(req.params.id);
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
    const manutencoes = await getManutencoesByVeiculoService(req.params.veiculoId);
    if (!manutencoes || manutencoes.length === 0) {
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
    const manutencoes = await getManutencoesByOficinaService(req.params.oficinaId);
    if (!manutencoes || manutencoes.length === 0) {
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

// Arquivo: manutencaoController.js | Modificado em: 27/07/2026
