import express from "express"
import { logger } from "./logger.js"
import { auth } from "./auth.js"

const app = express()
//In this expression the url which come after '/api' will use middlewere and run by default
//app.use("/api", logger)

//Multiple middlewere function will be performed in the order of list 'first logger execute than auth'
app.use([logger, auth])
app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.listen(8082, () => {
    console.log("Server is Running");
})
