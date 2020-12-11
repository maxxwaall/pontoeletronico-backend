require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const db = require('./db');

const storageTypes = {
    local: {},
    remote: {}
};

db.connect();
//Database SETUP não pode ficar no index
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(process.env.PORT || 3000);