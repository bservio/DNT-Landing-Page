const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
  user: 'ren',
  host: 'localhost',
  database: 'sua_database',
  password: 'sua_senha',
  port: 5432,
});

app.use(bodyParser.json());

// Rota para receber dados do QR Code e salvar no banco
app.post('/api/qrcodes', async (req, res) => {
  const { qrData } = req.body;
  const timestamp = new Date().toLocaleString();

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO qrcodes (data, timestamp) VALUES ($1, $2) RETURNING *',
      [qrData, timestamp]
    );
    client.release();
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir no banco de dados:', error);
    res.status(500).json({ error: 'Erro ao salvar no banco de dados' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
