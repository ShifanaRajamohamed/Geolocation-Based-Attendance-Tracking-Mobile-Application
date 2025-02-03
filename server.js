const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(':memory:');

// Create Table
db.run('CREATE TABLE attendance (id INTEGER PRIMARY KEY, token TEXT, latitude REAL, longitude REAL, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)');

app.post('/api/checkin', (req, res) => {
  const { token, deviceId, latitude, longitude } = req.body;
  db.run('INSERT INTO attendance (token, latitude, longitude) VALUES (?, ?, ?)', [token, latitude, longitude], (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Check-in recorded');
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
