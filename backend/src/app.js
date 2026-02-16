const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Routes setup
app.use('/api/users', userRoutes);

module.exports = app;