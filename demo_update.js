var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("web001db");
    var query = { address: "Valley 345" };
    var newvalues = { $set: { name: "Mikey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(query, newvalues, function(err, obj) {
        if (err) throw err;
        console.log("1 Document Updated!");
        db.close();
    });
});