/**
 * Express Server for TripSplits
 * Serves static files and provides a robust backend setup for deployment on Heroku, Render, Vercel, or local Node.js.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Fallback route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`TripSplits server is running at http://localhost:${PORT}`);
});