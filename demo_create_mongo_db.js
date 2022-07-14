var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/web001db";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Datebase created...");
    db.close();
});