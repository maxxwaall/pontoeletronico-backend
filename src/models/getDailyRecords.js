module.exports = function(client, res) {
    client.query('SELECT * FROM salesforce.dailyrecord__c', function(error, data) {
        res.json(data.rows);
    });
}