// src/services/veiculoService.js
import Veiculo from '../models/Veiculo.js';

// Cadastrar Veículo
export const createVeiculo = async (data) => {
  const veiculoExistente = await Veiculo.findOne({ plate: data.plate });
  if (veiculoExistente) {
    throw new Error('Já existe um veículo cadastrado com esta placa');
  }
  const veiculo = new Veiculo(data);
  return await veiculo.save();
};

// Listar Veículos
export const getVeiculos = async () => {
  return await Veiculo.find();
};

// Listar Veículo por ID
export const getVeiculoById = async (id) => {
  return await Veiculo.findById(id);
};

// Atualizar Veículo
export const updateVeiculo = async (id, data) => {
  return await Veiculo.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Veículo
export const deleteVeiculo = async (id) => {
  return await Veiculo.findByIdAndDelete(id);
};

// Listar Manutenções de um Veículo
export const getMaintenancesByVeiculo = async (id) => {
  const veiculo = await Veiculo.findById(id).populate('maintenances');
  return veiculo ? veiculo.maintenances : null;
};
