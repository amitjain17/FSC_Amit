const auth = (req, res, next) => {
    console.log("In the AUTH Function");
    next()
}

export { auth }