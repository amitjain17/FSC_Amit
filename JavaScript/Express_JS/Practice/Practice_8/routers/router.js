import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    console.log("Using Router");
    res.send("IN ROUTER")

})


router.get("/about", (req, res) => {
    res.send("About Page")
})

export { router }