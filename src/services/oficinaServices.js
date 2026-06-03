const Oficina = require('../models/oficina');

// Criar Oficina
exports.createOficina = async (data) => {
  const oficina = new Oficina(data);
  return await oficina.save();
};

// Listar Oficinas
exports.getOficinas = async () => {
  return await Oficina.find();
};

// Atualizar Oficina
exports.updateOficina = async (id, data) => {
  return await Oficina.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Oficina
exports.deleteOficina = async (id) => {
  return await Oficina.findByIdAndDelete(id);
};

// Listar Veículos atendidos por uma Oficina
exports.getVehiclesByOficina = async (id) => {
  const oficina = await Oficina.findById(id).populate('vehicles');
  return oficina ? oficina.vehicles : null;
};

