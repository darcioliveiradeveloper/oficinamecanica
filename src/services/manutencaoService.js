const Manutencao = require('../models/Manutencao');
const Veiculo = require('../models/Veiculo');
const Oficina = require('../models/Oficina');

// Criar Manutenção
exports.createManutencao = async (data) => {
  const veiculoExistente = await Veiculo.findById(data.veiculo);
  if (!veiculoExistente) throw new Error('Veículo não encontrado');

  const oficinaExistente = await Oficina.findById(data.oficina);
  if (!oficinaExistente) throw new Error('Oficina não encontrada');

  // Normaliza a data: se não vier na requisição, usa hoje
  let dataManutencao = data.date ? new Date(data.date) : new Date();
  dataManutencao.setHours(0, 0, 0, 0); // Força horário 00:00:00

  // Verificar duplicidade: mesma oficina, mesmo veículo e mesma data
  const manutencaoExistente = await Manutencao.findOne({
    veiculo: data.veiculo,
    oficina: data.oficina,
    date: dataManutencao
  });
    
  if (manutencaoExistente) {
    throw new Error('Já existe uma manutenção cadastrada para este veículo nesta oficina na mesma data');
  }

  // Calcular totalCost preliminarmente
  data.totalCost = data.services.reduce((sum, s) => sum + s.price, 0);

  const manutencao = new Manutencao(data);
  await manutencao.save();

  // Atualizar veículo e oficina
  veiculoExistente.maintenances.push(manutencao._id);
  await veiculoExistente.save();

  if (!oficinaExistente.vehicles.includes(veiculoExistente._id)) {
    oficinaExistente.vehicles.push(veiculoExistente._id);
    await oficinaExistente.save();
  }

  return manutencao;
};

// Listar Todas as Manutenções
exports.getManutencoes = async () => {
  return await Manutencao.find();
};

// Listar Manutenção por ID
exports.getManutencaoById = async (id) => {
  return await Manutencao.findById(id);
};

// Atualizar Manutenção (Corrigido o nome da função e o Model de alteração)
exports.updateManutencao = async (id, data) => {
  return await Manutencao.findByIdAndUpdate(id, data, { new: true });
};

// Deletar Manutenção
exports.deleteManutencao = async (id) => {
  return await Manutencao.findByIdAndDelete(id);
};

// Buscar Manutenções por Veículo (Método adicionado)
exports.getManutencoesByVeiculo = async (veiculoId) => {
  return await Manutencao.find({ veiculo: veiculoId });
};

// Buscar Manutenções por Oficina (Método adicionado)
exports.getManutencoesByOficina = async (oficinaId) => {
  return await Manutencao.find({ oficina: oficinaId });
};
