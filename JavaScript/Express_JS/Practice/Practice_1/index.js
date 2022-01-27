const file = require('fs')

//Write and Read File Synchronously
file.writeFileSync("c:\\Users\\Amit.2.Jain\\Desktop\\FSCoding\\FSC_Amit\\JavaScript\\Express_JS\\Practice\\Practice_1/first.txt", "This is my first text file", { flag: 'a' })
const data = file.readFileSync("c:\\Users\\Amit.2.Jain\\Desktop\\FSCoding\\FSC_Amit\\JavaScript\\Express_JS\\Practice\\Practice_1/first.txt", 'utf8')

console.log(data);


//Write and Read File Asynchronously

console.log("Entering in ASYNC");
file.writeFile("c:\\Users\\Amit.2.Jain\\Desktop\\FSCoding\\FSC_Amit\\JavaScript\\Express_JS\\Practice\\Practice_1\\firstASYNC.txt", "Second File", { encoding: "utf8", flag: "w" }, (err) => {
    console.log(err);
}, file.readFile("c:\\Users\\Amit.2.Jain\\Desktop\\FSCoding\\FSC_Amit\\JavaScript\\Express_JS\\Practice\\Practice_1\\firstASYNC.txt", "utf8", (err, data) => {
    console.log("IN the ASYNC");
}))
console.log("Out from the ASYNC");


const os = require('os')
console.log(`${os.uptime()} Seconds`);

