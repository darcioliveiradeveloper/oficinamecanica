const oficinaService = require('../services/oficinaServices');

// Criar Oficina
exports.createOficina = async (req, res) => {
  try {
    const oficina = await oficinaService.createOficina(req.body);
    res.status(201).json(oficina);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar Oficinas
exports.getOficinas = async (req, res) => {
  try {
    const oficinas = await oficinaService.getOficinas();
    res.json(oficinas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar Oficina
exports.updateOficina = async (req, res) => {
  try {
    const oficina = await oficinaService.updateOficina(req.params.id, req.body);
    if (!oficina) return res.status(404).json({ message: 'Oficina não encontrada' });
    res.json(oficina);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar Oficina
exports.deleteOficina = async (req, res) => {
  try {
    const oficina = await oficinaService.deleteOficina(req.params.id);
    if (!oficina) return res.status(404).json({ message: 'Oficina não encontrada' });
    res.json({ message: 'Oficina deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Listar Veículos atendidos por uma Oficina
exports.getVehiclesByOficina = async (req, res) => {
  try {
    const vehicles = await oficinaService.getVehiclesByOficina(req.params.id);
    if (!vehicles) return res.status(404).json({ message: 'Oficina não encontrada' });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

