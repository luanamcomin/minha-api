const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;

// Conectar ao MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
});

// Middlewares
app.use(bodyParser.json());
app.use('/produtos', produtoRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
