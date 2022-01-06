let num2 = "2"
let num = 3
let result = num + +num2
console.log(result);


let num1 = "3"
if (num1 == num) {
    console.log("Hii");
}
if (num1 === num) {
    console.log("Hi");
}

//Template Literal

let val1 = 2
let val2 = 7
result = val1 + val2

console.log(`Sum of ${val1} and ${val2} is ${result}`);

let student = {
    sid: 7,
    sname: "Amit",
    lname: "Jain",
    laptop: {
        ram: 4,
        brand: "Dell",
        'Gen.': "i7"
    }
}

console.log(student);
console.log(student.lname);
console.log(student.sid);
console.log(student.laptop.brand);
console.log(student.laptop.brand.length);
console.log(student.laptop.unknown?.length);                // ? is check that wheather the variable is present or not if it is present it execute the expression else it show undedfined


//For in loop for Object
for (let i in student.laptop) {
    console.log(i, student.laptop[i])
}


//Functions

function start() {
    console.log("Hello");
}

start();

//Passing value in functions
function check1(val1, val2) {

    let result1 = val1 + val2
    return result1

}

let ans = check1(2, 5)
console.log(ans);

//Arrow Functions

let add = (num3, num4) => { return num3 + num4 }

let r = add(2, 6);
console.log("Arrow Function Answer is " + r);

//Arrow Functions with no return type
add = (num3, num4) => num3 + num4

r = add(2, 6);
console.log("Arrow Function no return type Answer is " + r);

