// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'dnt.somosicev.com',
  port: '8081',
  user: 'root',
  password: 'MySql2019!',
  database: 'leitor'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados MySQL bem-sucedida');
});

app.post('/api/qrcodes', (req, res) => {
  const { name } = req.body;
  const sql = 'INSERT INTO qr_codes (name) VALUES (?)';
  connection.query(sql, [name], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).json({ error: 'Erro ao inserir dados' });
      return;
    }
    console.log('Dados inseridos com sucesso:', result);
    res.status(200).json({ message: 'Dados inseridos com sucesso' });
  });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
