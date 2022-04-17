// Importar o express
const express = require('express');

// Criar uma aplicação em express
const app = express();

// Fazer com que a aplicação express atenda a uma requisição de raíz no browser
app.get('/', (req, res)=>{
    res.send("olá!");
    console.log("Deu certo!... até certo ponto...");
})

// Criar uma rota get '/pessoas' que deve retornar as pessoas para o cliente
app.get('/pessoas', (req, res)=>{
    let pessoas = require('./database/pessoas.json');
    res.send(pessoas);
});

// Criar uma rota get '/pessoas/1' que deve retornar a pessoa da posição 1 para o cliente
app.get('/pessoas/:id', (req, res)=>{
    let id = req.params.id;
    let pessoas = require('./database/pessoas.json');
    res.send(pessoas[id]);
})

// Levantar a aplicação (fazer com que a applicação fique de prontidão)
app.listen(3000, ()=>{console.log("Servidor roando na porta 3000...")
    });