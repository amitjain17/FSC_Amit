import data from './data.js'
import express from 'express'
const app = express()

app.get("/", (req, res) => {

    res.json(data)
})


app.listen(8082, () => {
    console.log("Server listen");
})