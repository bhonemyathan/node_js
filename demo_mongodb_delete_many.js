var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("web001db");
    var query = { address: /^O/ };
    dbo.collection("customers").deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(obj.deletedCount + " documents deleted");
        db.close();
    });
});