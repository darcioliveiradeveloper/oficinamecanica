import mongoose from 'mongoose';

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

export default mongoose.model('Veiculo', VeiculoSchema);

// Arquivo: Veiculo.js | Modificado em: 27/07/2026