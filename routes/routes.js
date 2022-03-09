const express = require("express");
const router = express.Router();

const data = require("../data/hindiQuotes");

router.get("/",(req,res)=>{
    res.json(data[Math.floor(Math.random()*data.length)]);
})

router.get("/:type",(req,res)=>{
    res.send(req.params.type);
})

module.exports = router