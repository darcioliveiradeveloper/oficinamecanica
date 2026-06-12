const Manutencao = require('../models/Manutencao');
const Veiculo = require('../models/Veiculo');
const Oficina = require('../models/Oficina');

// Função auxiliar para calcular o total
function calcularTotal(services) {
  return services.reduce((sum, service) => sum + service.price, 0);
}

// Criar Manutenção com validação e atualização de relacionamentos
exports.createManutencao = async (data) => {
  // Verificar se veículo existe
  const veiculoExistente = await Veiculo.findById(data.veiculo);
  if (!veiculoExistente) {
    throw new Error('Veículo não encontrado, verifique o ID informado');
  }

  // Verificar se oficina existe
  const oficinaExistente = await Oficina.findById(data.oficina);
  if (!oficinaExistente) {
    throw new Error('Oficina não encontrada, verifique o ID informado');
  }

  // Calcular totalCost
  data.totalCost = calcularTotal(data.services);

  // Criar manutenção
  const manutencao = new Manutencao(data);
  await manutencao.save();

  // Atualizar veículo: adicionar manutenção
  veiculoExistente.maintenances.push(manutencao._id);
  await veiculoExistente.save();

  // Atualizar oficina: adicionar veículo (se ainda não estiver listado)
  if (!oficinaExistente.vehicles.includes(veiculoExistente._id)) {
    oficinaExistente.vehicles.push(veiculoExistente._id);
    await oficinaExistente.save();
  }

  return manutencao;
};


  // Listar Todas as Manutenção
  exports.getManutencoes = async () => {
    return await Manutencao.find();
  }
  
  // Listar Manutenção por ID
  exports.getManutencaoById = async (id) => {
    return await Manutencao.findById(id);
  };

  // Atualizar Oficina
exports.updateOficina = async (id, data) => {
  return await Oficina.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Manutenção
exports.deleteManutencao = async (id) => {
  return await Manutencao.findByIdAndDelete(id);
};
