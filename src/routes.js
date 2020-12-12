const routes = require('express').Router();
const db = require('./db');

routes.post('/dailyrecord/', function (req, res) {
    console.log('requisição');
    console.log(req.body.RegisterNumber);
    require('./models/saveDailyRecord.js')(db, req.body.RegisterNumber, res);
});

routes.get('/dailyrecord/', function(req, res) {
    require('./models/getDailyRecords.js')(db, res);
});

module.exports = routes;