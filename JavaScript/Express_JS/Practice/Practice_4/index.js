const express = require('express')
const path = require('path')
const app = express()

//All Static file will go in public folder
app.use(express.static("./public"))

app.get("/", (req, res) => {
    //execute main html file and it will get all data from public folder
    //  res.sendFile(path.resolve(__dirname, "./public/index.html"))
    //res.status(200).send("Hello World")

})
app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource Not Found</h1>")
})


app.listen(8082, () => {
    console.log("Server Started");

})

