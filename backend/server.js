const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Optionally set up a dynamic API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: "Data from backend" });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
