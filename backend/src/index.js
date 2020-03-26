const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Express pega o json que será passado e converte em um objeto legível para o javascript
app.use(routes);
app.listen(3333);