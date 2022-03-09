const express = require("express");

const PORT = process.env.PORT | 6060;
const app = express();

app.use("/hindiquote/random",require("./routes/routes"))

app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/hindiquote/random`))