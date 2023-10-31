const express = require('express');
const jsonServer = require('json-server');
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors'); // Importe o pacote cors

const port = 3001;

server.use(express.json());

// Configurar o CORS para permitir solicitações do seu aplicativo React em localhost:3000
server.use(cors({ origin: 'http://localhost:3000' }));

server.use('/api', router);
server.use(middlewares);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
