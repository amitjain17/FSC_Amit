

let data = document.getElementById("number");
let save_value = document.getElementById("save");
let val = document.getElementById("string");
let count = 0;
let string = "Saved Values: ";


function increment() {
    count += 1
    data.textContent = count
}

function decrement() {
    count -= 1
    data.textContent = count
}

function save() {

    string += "(" + count + ")" + "- "
    val.textContent = string

}