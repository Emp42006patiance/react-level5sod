const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 8000;

// Connect to MySQL
const db_connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react-level5sod'
}).promise();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

// Test route
app.get('/message', (req, res) => {
  res.json("✅ Integration test successful between frontend and backend!");
});

// INSERT route
app.post("/Inserting", async (req, res) => {
  
    const { username, email, password } = req.body;

    
    const [result] = await db_connection.query(
      "INSERT INTO data (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    console.log("✅ User inserted:", result);
    res.json({ message: "User inserted successfully!" });

});

app.delete("/data-deleted:id", async (req, res) => {
  const { id } = req.params;

  const [runningQuery] = await db_connection.query(
    "DELETE FROM `data` WHERE id=?",
    [id]
  );

  console.log(runningQuery);
  res.send("User deleted successfully");
});



app.put("/edit-data", async (request, response) => {
  const { username, email, password, id } = request.body;

  const [qrledit] = await db_connection.query(
    "UPDATE `data` SET `username`=?, `password`=?, `email`=? WHERE id=?",
    [username, password, email, id]
  );

  console.log(qrledit);
  response.json({ message: "User update UNIT TESTING FINISHED" });
});



app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
