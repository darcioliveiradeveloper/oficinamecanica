const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db'); // conexão com MongoDB
const oficinaRoutes = require('./src/routes/oficinaRoutes'); // rotas da Oficina

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/api/oficinas', oficinaRoutes);

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('API Oficina Mecânica funcionando 🚗🔧');
});

// Conectar ao MongoDB e iniciar servidor
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar no MongoDB:', error.message);
  });

  