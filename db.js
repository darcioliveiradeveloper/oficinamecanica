const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Conexão usando a string do .env
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB conectado com sucesso 🚀');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error.message);
    process.exit(1); // encerra a aplicação se não conectar
  }
};

module.exports = connectDB;
