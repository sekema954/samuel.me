const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require("cors");

const app = express();
const PORT = 3001;


app.use(cors());

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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/projects`);
});
