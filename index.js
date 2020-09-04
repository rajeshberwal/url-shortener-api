const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({path: __dirname + '/.env'});

// importing routers
const indexRoute = require('./routes/index');
const urlRoute = require('./routes/url');

// initializing app
const app = express();

// Connect To Database
connectDB();

app.use(express.json())

// Defining routes
app.use('/', indexRoute);
app.use('/api/url', urlRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));