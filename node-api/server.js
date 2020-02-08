const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()); // permite acessar a aplicação de outros endereços

// Iniciando o DB
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hktta.mongodb.net/week10?retryWrites=true&w=majority',{
 useNewUrlParser: true,
 useUnifiedTopology: true,   
});
requireDir('./src/models');// vai dar require em todos os models

//const Product = mongoose.model('Product');

//Primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);