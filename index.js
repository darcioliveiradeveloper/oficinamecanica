const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const oficinaRoutes = require('./src/routes/oficinaRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/api/oficinas', oficinaRoutes);
app.use('/api/veiculos', veiculoRoutes);

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('API Oficina Mecânica funcionando 🚗🔧');
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar no MongoDB:', error.message);
  });

  