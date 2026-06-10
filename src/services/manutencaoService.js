const Manutencao = require('../models/Manutencao');

// Criar Manutenção
exports.createManutencao = async (data) => {
  const manutencao = new Manutencao(data);
  return await manutencao.save();
};

// Listar Manutenções
exports.getManutencoes = async () => {
  return await Manutencao.find().populate('veiculo').populate('oficina');
};

// Listar Manutenção por ID
exports.getManutencaoById = async (id) => {
  return await Manutencao.findById(id).populate('veiculo').populate('oficina');
};

// Atualizar Manutenção
exports.updateManutencao = async (id, data) => {
  return await Manutencao.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Manutenção
exports.deleteManutencao = async (id) => {
  return await Manutencao.findByIdAndDelete(id);
};

// Buscar Manutenção por Veículo
exports.getManutencoesByVeiculo = async (veiculoId) => {
  return await Manutencao.find({ veiculo: veiculoId }).populate('oficina');
};

// Buscar Manutenção por Oficina
exports.getManutencoesByOficina = async (oficinaId) => {
  return await Manutencao.find({ oficina: oficinaId }).populate('veiculo');
};

