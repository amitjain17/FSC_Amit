const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //res.send("Hello Express")
    res.status(200).send("Hello Express with status code")
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource Not Found</h1>")
})

app.listen(8082, () => {
    console.log("Server Start Listenting on Port");
})