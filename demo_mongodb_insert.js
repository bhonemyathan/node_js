var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('web001db');
    var myObj = { name: 'Company Inc', address: 'Highway 37' };
    dbo.collection('customers').insertOne(myObj, function(err, res) {
        if (err) throw err;
        console.log('1 documents inserted...');
        db.close();
    });
});