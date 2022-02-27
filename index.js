const express = require("express");

const PORT = 6060;
const app = express();

app.use("/hindiquotes",require("./routes/routes"))


app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}/`))




