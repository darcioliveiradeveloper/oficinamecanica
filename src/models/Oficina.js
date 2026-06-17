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
    ref: 'Vehicle'
    
  }]
}, {
  timestamps: true
});



module.exports = mongoose.model('Oficina', OficinaSchema);

