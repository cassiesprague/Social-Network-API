// Used the following videos and class activities to help with this challenge
// 18-NoSQL 28-Stu_Mini-Project
// https://www.youtube.com/watch?v=aFjR5U0ZaJM

// Imports packages and files
const express = require('express');
const db = require('./config/connections');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

// Environment variables
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connects MongoDB and starts server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on port ${PORT}!`);
    });
});