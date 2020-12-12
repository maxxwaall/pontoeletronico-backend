module.exports = function(client, registerNumber, res) {

    client.query(
        `INSERT INTO salesforce.dailyrecord__c (RegisterNumber__c, Time__c) 
            VALUES (
                '${registerNumber}', 
                '2020-12-12T04:20:56.000Z'
            )
        `, 
        function (error, data){
            console.log(error);
            //res.json();
        }
    );

    client.query('SELECT * FROM salesforce.dailyrecord__c', function(error, data) {
        res.json(data.rows);
    });
}