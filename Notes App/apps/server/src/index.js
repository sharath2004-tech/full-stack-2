const express = require("express")
const app = express()
const quotes = require("./quotes.json")

app.get("/", (req, res) => {
    res.json(quotes)
})

app.get("/",(req,res) =>{
    res.json("hello")
})
app.listen(5000,()=>{}