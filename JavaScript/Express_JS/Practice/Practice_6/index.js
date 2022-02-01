import data from "./data.js"
import express from "express"

const app = express()

app.get("/", (req, res) => {
    // console.log(data);
    res.send("<h1>Starting Page</h1><a href='/api/products'>Products</a>")
})


app.get("/api/products", (req, res) => {
    //get specified value from json DATA
    const newdata = data.data.map((product) => {
        const { id, type, name } = product
        return { id, type, name }
    })
    res.json(newdata)
})



app.get("/api/products/:dataID", (req, res) => {

    const { dataID } = req.params
    const pdata = data.data.find((product) => product.id === dataID)
    if (pdata) {
        return res.json(pdata)
    }
    else {
        return res.status(404).send("Product does not exist")
    }

})

app.get('/api/v1/query', (req, res) => {
    let newDat = [...data.data]

    const pdata = newDat.find((product) => product.name === req.query.name)
    res.send(pdata)

})

app.listen(8082, () => {
    console.log("Server Working");
})
