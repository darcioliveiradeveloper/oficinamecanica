const mongoose = require('mongoose');

const ManutencaoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  
  services: [
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        
    }
  ],
  cost: {
    type: Number,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  },
  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veiculo',
    required: true
  },
  oficina: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Oficina',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Manutencao', ManutencaoSchema);

