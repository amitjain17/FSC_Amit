const logger = (req, res, next) => {
    console.log(req.url);
    console.log("In the logger function using Middlewere");
    next()
}

export { logger }