require('dotenv').config();

const express = require('express');
const app = express();

const { PORT } = require('./config');
const { connection } = require('./config');
const localPORT = PORT || 5000;

app.use(express.json()); // cara menggunakan body-parser di dalam express
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send(`Welcome to express mysql demo`);
});
app.use('/api/users', require('./routes/users'));

if (connection) {
    app.listen(localPORT, () => {
        console.log('Connected to database');
        console.log(`Server runs on port ${localPORT}`);
    });
}
