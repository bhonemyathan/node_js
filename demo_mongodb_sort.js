var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("web001db");
    var mysort = { name: 1 };
    dbo
        .collection("customers")
        .find()
        .sort(mysort)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});
//{{ name:1}} ascending
//{{ name: -1 }}dsceding