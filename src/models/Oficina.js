import mongoose from 'mongoose';

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
    ref: 'Veiculo'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Oficina', OficinaSchema);

// Arquivo: Oficina.js | Modificado em: 27/07/2026