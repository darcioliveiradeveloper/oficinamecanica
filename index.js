// index.js
const express = require('express');
const app = express();

app.use(express.json()); // garante que o body seja interpretado como JSON

app.post('/somar-valores', (req, res) => {
  const { valores } = req.body;

  // valida se 'valores' existe e é um array
  if (!Array.isArray(valores)) {
    return res.status(400).json({ message: "O campo 'valores' deve ser um array" });
  }

  // usa reduce com segurança
  const soma = valores.reduce((acc, num) => acc + num, 0);

  res.json({ resultado: soma });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

