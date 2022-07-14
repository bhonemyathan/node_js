const { ObjectId } = require("mongodb");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("web001db");
    var id = new ObjectId("62c67640e52c0328f26c8fe6");
    var query = { _id: id };
    dbo
        .collection("customers")
        .find(query)
        .toArray(function(err, res) {
            if (err) throw err;
            console.log(res);
            db.close();
        });
});