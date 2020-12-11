const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const db = require('./db');

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({ hello: 'rocket' });
});

routes.get('/dailyrecord/', function(req, res) {
    var results = require('./models/getDailyRecords.js')(db, res);
    console.log(results);
});

module.exports = routes;