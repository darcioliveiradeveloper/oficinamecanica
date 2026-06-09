const Veiculo = require('../models/Veiculo');

// Criar Veículo
exports.createVeiculo = async (data) => {
  const veiculo = new Veiculo(data);
  return await veiculo.save();
};

// Listar Veículos
exports.getVeiculos = async () => {
  return await Veiculo.find();
};

// Atualizar Veículo
exports.updateVeiculo = async (id, data) => {
  return await Veiculo.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Veículo
exports.deleteVeiculo = async (id) => {
  return await Veiculo.findByIdAndDelete(id);
};

// Listar Manutenções de um Veículo
exports.getMaintenancesByVeiculo = async (id) => {
  const veiculo = await Veiculo.findById(id).populate('maintenances');
  return veiculo ? veiculo.maintenances : null;
};

