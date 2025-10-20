// server.js

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Create MySQL connection pool
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

// Enable CORS for React frontend
app.use(cors({
  origin: 'http://localhost:5173'
}));


// Test route for frontend/backend integration
app.get('/message', (req, res) => {
  res.json("hello doctor jackson unit testing in integration between frontend and backend successful");
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
