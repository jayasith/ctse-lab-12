const express = require("express")

const app = express()

app.get("/",(req,res) => {
    res.send("<h1>Hi There</h1>")
})

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));