const Oficina = require('../models/Oficina');

// Criar Oficina
// src/services/oficinaService.js
exports.createOficina = async (data) => {
  const oficinaExistente = await Oficina.findOne({ name: data.name });
  if (oficinaExistente) {
    throw new Error('Já existe uma oficina cadastrada com este nome');
  }
  const oficina = new Oficina(data);
  return await oficina.save();
};


// Listar Oficinas
exports.getOficinas = async () => {
  return await Oficina.find();
};

// Listar Oficina por ID
exports.getOficinaById = async (id) => {
  return await Oficina.findById(id);
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

