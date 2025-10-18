const express = require('express');
const mysql = require('mysql2');

const db_connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react-level5sod'
}).promise();

const app = express();
const port = 8000;

// Middleware to parse JSON
app.use(express.json());

// Registration route
app.put('/register', async (req, res) => {
  const { id, username, password } = req.body;

  const [result] = await db_connection.query(
    'INSERT INTO `data`(`id`, `username`, `password`) VALUES (?, ?, ?)',
    [id, username, password]
  );

  res.json({ success: true, message: 'User inserted successfully', result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
