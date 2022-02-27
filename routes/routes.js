const express = require("express");
const jsonfile = require("jsonfile");

const router = express.Router();

const data = jsonfile.readFileSync("./data/hindiQuotes.json")

router.get("/",(req,res)=>{
    res.json(data[Math.floor(Math.random()*data.length)]);
})

router.get("/:type",(req,res)=>{
    res.send(req.params.type);
})

module.exports = router