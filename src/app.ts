import express from 'express';
import cors from 'cors';
<<<<<<< HEAD
import { Request, Response } from 'express';
import { Ave } from './model/Ave';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import AveController from './controller/AveController';
import HabitatController from './controller/HabitatController';
import AtracaoController from './controller/AtracaoController';
=======
>>>>>>> 991135d9783f9272923526d6162d66136400c3c1
import { DatabaseModel } from './model/DatabaseModel';
import AveController from './controller/AveController';
import HabitatController from './controller/HabitatController';
import AtracaoController from './controller/AtracaoController';

const aveController = new AveController('', 0, '', 0);
const habitatController = new HabitatController('');
const atracaoController = new AtracaoController('');

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

const aveController = new AveController('',0,'',0);
const habitatController = new HabitatController('');
const atracaoController = new AtracaoController('');

// Rota padrão para testes (NÃO USAR EM AMBIENTE PRODUÇÃO)
server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Informações: ${username} - ${password}');
});

/**
 * Listar informações cadastradas no banco de dados
 */
<<<<<<< HEAD
server.get('/listar-aves', aveController.todos);
server.get('/habitats', habitatController.listar);
server.get('/atracoes', atracaoController.listar);
=======
// Listar todos as aves cadastradas
server.get('/aves', aveController.todos);
// Listar todos os habitats cadastradas
server.get('/habitats', habitatController.todos);
// Listar todas as atrações cadastradas
server.get('/atracoes', atracaoController.todos);
>>>>>>> 991135d9783f9272923526d6162d66136400c3c1

/**
 * Cadastrar informações no sistema
 */
<<<<<<< HEAD
server.post('/novo/ave', aveController.novo);
server.post('/novo/habitat', habitatController.cadastrar);
server.post('/novo/atracao', atracaoController.cadastrar);

/**
 * Remover informações do sistema
 */
server.delete('/remover/animal', aveController.remover);
server.delete('/remover/atracao', atracaoController.remover);
server.delete('/remover/habitat', habitatController.remover);
=======
// Cadastra informações de uma nova ave
server.post('/novo/ave', aveController.novo);
// Cadastra informações de um novo habitat
server.post('/novo/habitat', habitatController.novo);
// Cadastra informações de uma nova atracao
server.post('/novo/atracao', atracaoController.novo);

/**
 * Remover informações no sistema
 */
// Rota para remover um animal
server.delete('/remover/animal', aveController.remover);
// Rota para remover um habitat
server.delete('/remover/habitat', habitatController.atualizar);
// Rota para remover uma atração
server.delete('/remover/atracao', atracaoController.remover);
>>>>>>> 991135d9783f9272923526d6162d66136400c3c1

/**
 * Atualizar informações no sistema
 */
<<<<<<< HEAD
server.put('/atualizar/animal', aveController.atualizar);
server.put('/atualizar/atracao', atracaoController.atualizar);
server.put('/atualizar/habitat', habitatController.atualizar);
=======
// Rota para atualizar as informações de um animal
server.put('/atualizar/animal', aveController.atualizar);
// Rota para atualizar as informações de um habitat
server.put('/atualizar/habitat', habitatController.atualizar);
// Rota para atualizar as informações de uma atração
server.put('/atualizar/atracao', atracaoController.atualizar);
>>>>>>> 991135d9783f9272923526d6162d66136400c3c1

new DatabaseModel().testeConexao().then((resbd) => {
    if (resbd) {
        server.listen(port, () => {
            console.info(`Servidor executando no endereço http://localhost:${port}/`);
        });
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
});