'use strict';

const express = require("express");

const PORT = process.env.PORT | 6060;
const app = express();

app.get("/hindiquotes",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use("/hindiquotes/random",require("./routes/routes"))

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/hindiquotes`))