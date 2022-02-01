import express from "express"
import { router } from "./routers/router.js"

const app = express()
//In this expression the url which come after '/api' will use middlewere and run by default
//app.use("/api", logger)


app.use('/api', router)

// app.get("/", (req, res) => {
//     res.send("Home Page")
// })



app.listen(8082, () => {
    console.log("Server is Running");
})
