module.exports = function(client, res, registerNumber) {
    client.query('SELECT * FROM salesforce.dailyrecord__c WHERE RegisterNumber__c = $1 ORDER BY Time__c DESC', [registerNumber], function(error, data) {
        res.json(data.rows);
    });
}