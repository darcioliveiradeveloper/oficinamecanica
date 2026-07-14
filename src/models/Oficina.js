const mongoose = require('mongoose');

const OficinaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  specialties: {
    type: [String],
    default: []
  },
  vehicles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veiculo' // Corrigido de 'Vehicle' para o nome correto do model 'Veiculo'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Oficina', OficinaSchema);
