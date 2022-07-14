var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('web001db');
    var myObj = [
        { _id: 152, name: "Chocolate Heaven" },
        { _id: 153, name: "tasty Lemon" },
        { _id: 154, name: "Vanilla Dream" },
    ];
    dbo.collection('porudcts').insertMany(myObj, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})