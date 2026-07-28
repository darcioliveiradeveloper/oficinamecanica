// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js'; 

// Importando as rotas da pasta src (Importação Default)
import veiculoRoutes from './src/routes/veiculoRoutes.js';
import oficinaRoutes from './src/routes/oficinaRoutes.js';
import manutencaoRoutes from './src/routes/manutencaoRoutes.js';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middlewares globais obrigatórios
app.use(cors());
app.use(express.json());

// Conecta ao banco de dados MongoDB
connectDB();

// --- Vinculando as Rotas do seu Sistema ---
app.use('/veiculos', veiculoRoutes);
app.use('/oficinas', oficinaRoutes);
app.use('/manutencoes', manutencaoRoutes);

// Rota de teste/validação herdada do seu código original
app.post('/somar-valores', (req, res) => {
  const { valores } = req.body;

  if (!Array.isArray(valores)) {
    return res.status(400).json({ error: 'O campo "valores" deve ser um array de números.' });
  }

  const soma = valores.reduce((acc, curr) => acc + curr, 0);
  return res.json({ soma });
});

// Inicialização da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});

// Arquivo: index.js | Modificado em: 27/07/2026
