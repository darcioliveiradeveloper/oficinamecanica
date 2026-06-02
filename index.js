const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas básicas
app.get('/', (req, res) => {
  res.send('API Oficina Mecânica funcionando 🚗🔧');
});

// Conexão com MongoDB
const connectDB = require('./db');
connectDB();

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

