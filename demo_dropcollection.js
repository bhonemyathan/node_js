var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("web001db");
    dbo.collection("porudcts").drop(function(err, obj) {
        if (err) throw err;
        console.log("collection droped!");
        db.close();
    });
});