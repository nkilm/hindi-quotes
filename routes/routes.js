const express = require("express");
const MongoClient = require('mongodb').MongoClient;

const URL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const router = express.Router();

router.get("/", (req, res) => {
    MongoClient.connect(URL, function (err, db) {
        if (err) throw err;
        const dbo = db.db("Hindi_Quotes_REST_API");
        dbo.collection("hindiQuotes").aggregate([
            { $sample: { size: 1 } }
        ]).toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
})

router.get("/:type", (req, res) => {
    MongoClient.connect(URL, function (err, db) {
        if (err) throw err;
        const dbo = db.db("Hindi_Quotes_REST_API");

        dbo.collection("hindiQuotes")
            .aggregate([
                { $match: { type: req.params.type } },
                { $sample: { size: 1 } }
            ]).
            toArray(function (err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
            });
    });
})

module.exports = router