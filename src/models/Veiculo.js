const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
  plate: {
    type: String,
    required: true,
    unique: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  maintenances: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manutencao'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Veiculo', VeiculoSchema);

