// Imports modules and files
const express     = require('express');
const app         = express();
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const jwt         = require('jsonwebtoken');
const config      = require('./config');
const User        = require('./app/models/user');