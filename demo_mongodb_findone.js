var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('web001db');
    dbo.collection('customers').findOne({}, function(err, res) {
        if (err) throw err;
        console.log(res.name);
        db.close();
    })
})