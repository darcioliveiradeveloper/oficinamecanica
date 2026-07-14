const Veiculo = require('../models/Veiculo');

// Cadastrar Veículo
exports.createVeiculo = async (data) => {
  const veiculoExistente = await Veiculo.findOne({ plate: data.plate });
  if (veiculoExistente) {
    throw new Error('Já existe um veículo cadastrado com esta placa');
  }
  const veiculo = new Veiculo(data);
  return await veiculo.save();
};

// Listar Veículos
exports.getVeiculos = async () => {
  return await Veiculo.find();
};

// Listar Veículo por ID (Nomenclatura padronizada no singular)
exports.getVeiculoById = async (id) => {
  return await Veiculo.findById(id);
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
