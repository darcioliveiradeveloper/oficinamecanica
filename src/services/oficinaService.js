// src/services/oficinaService.js
import Oficina from '../models/Oficina.js';

// Criar Oficina
export const createOficina = async (data) => {
  const oficinaExistente = await Oficina.findOne({ name: data.name });
  if (oficinaExistente) {
    throw new Error('Já existe uma oficina cadastrada com este nome');
  }
  const oficina = new Oficina(data);
  return await oficina.save();
};

// Listar Oficinas
export const getOficinas = async () => {
  return await Oficina.find();
};

// Listar Oficina por ID
export const getOficinaById = async (id) => {
  return await Oficina.findById(id);
};

// Atualizar Oficina
export const updateOficina = async (id, data) => {
  return await Oficina.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Oficina
export const deleteOficina = async (id) => {
  return await Oficina.findByIdAndDelete(id);
};

// Listar Veículos atendidos por uma Oficina
export const getVehiclesByOficina = async (id) => {
  const oficina = await Oficina.findById(id).populate('vehicles');
  return oficina ? oficina.vehicles : null;
};
