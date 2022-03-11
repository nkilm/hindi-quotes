'use strict';

const express = require("express");
const path = require("path");
const PORT = process.env.PORT | 6060;
const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/hindiquotes",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use("/hindiquotes/random",require("./routes/routes"))

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/hindiquotes`))