import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const ManutencaoSchema = new mongoose.Schema({
  oficina: { type: mongoose.Schema.Types.ObjectId, ref: 'Oficina', required: true },
  veiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Veiculo', required: true },
  services: [ServiceSchema],
  date: { type: Date, default: Date.now },
  totalCost: { type: Number, default: 0 }
}, { timestamps: true });

// Calcula o total automaticamente antes de salvar no banco
ManutencaoSchema.pre('save', function (next) {
  // Ajusta horário para 00:00:00
  if (this.date) {
    this.date.setHours(0, 0, 0, 0);
  }

  if (this.services && this.services.length > 0) {
    this.totalCost = this.services.reduce((sum, s) => sum + s.price, 0);
  }
  next();
});

export default mongoose.model('Manutencao', ManutencaoSchema);

// Arquivo: Manutencao.js | Modificado em: 27/07/2026