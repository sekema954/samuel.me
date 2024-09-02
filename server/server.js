require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());


app.use(express.static(path.join(__dirname, '../client/build')));

// Endpoint to serve the JSON file
app.get('/projects', (req, res) => {
    const filePath = path.join(__dirname, 'projects.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read the JSON file' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
