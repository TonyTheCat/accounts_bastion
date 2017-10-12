const mongoose = require('mongoose');
const config   = require('./config');
const env      = require('./env');

// connect to DB
mongoose.connect(config.database);
