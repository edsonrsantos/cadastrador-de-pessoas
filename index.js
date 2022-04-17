// Importei o array de pessoas
let pessoasDb = require('./database/pessoas.json');

// Importando funções
let show = require('./functions/show');
let busca = require('./functions/busca');

// Executar a função para mostrar pessoas
let pessoasBuscadas = busca(pessoasDb,'maria');
show(pessoasBuscadas);

//fjaslfkjl

