const express = require("express");
const router = express.Router();

const data = require("../data/hindiQuotes");

router.get("/",(req,res)=>{
    res.json(data[Math.floor(Math.random()*data.length)]);
})

router.get("/:type",(req,res)=>{
    const type_quote = data.filter((obj)=>{
        if(obj.type===(req.params.type)){
            return obj;
        } 
    })
    if(!(type_quote.length)){
        res.status(400).json({"Error":"Invalid Request,Check URL Parameters"})
    }
    res.json(type_quote[Math.floor(Math.random()*type_quote.length)]);
})

module.exports = router