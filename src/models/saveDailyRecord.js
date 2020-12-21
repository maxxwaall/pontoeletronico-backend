module.exports = function(client, registerNumber, res) {

    var now = buildDate();
    
    client.query(
        `INSERT INTO salesforce.dailyrecord__c (RegisterNumber__c, Time__c) 
            VALUES (
                '${registerNumber}', 
                '${now}'
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

    function buildDate(){

        var now = new Date();
        
        return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + 
                'T' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.000Z';
    }
}