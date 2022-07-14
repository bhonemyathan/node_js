var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("web001db");
    var query = { address: /^M/ };
    var newval = { $set: { name: "Lol ma tr" } };
    dbo.collection("customers").updateMany(query, newval, function(err, res) {
        if (err) throw err;
        console.log(res.modifiedCount + "document(s) updated!");
        db.close();
    });
});