const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Namaste!");
})

router.get("/:msg",(req,res)=>{
    res.send(req.params.msg);
})

module.exports = router