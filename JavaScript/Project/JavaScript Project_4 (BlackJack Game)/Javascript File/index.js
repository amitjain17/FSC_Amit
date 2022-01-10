let val = []
let sum = 0
let c_status = " "
let r_value = 0
let result = ""
let count = 0

let card_val = document.getElementById("card-vl")

let sum_val = document.getElementById("sum-el")
let won_el = document.getElementById("won-el")

function number_check() {
    if (sum < 21) {
        result = "Check Next Value"

    }
    else if (sum === 21) {
        result = "You Won the Game"

        reboot()

    }
    else {
        result = "You Lose the Game"

        reboot()
    }

}

function random() {
    r_value = Math.floor(Math.random() * 13) + 1
    val.push(r_value)
}

function start() {

    if (c_status == " ") {
        sum = 0
        val = []
        card_val.textContent = "Cards Value: "
        c_status = "start"
        random()

        card_val.textContent += r_value + " "
        won_el.textContent = "Status:"
        check_show()
        counter()

    }
    else {
        won_el.textContent = "Status: Game Already Started Click Next Value Button"

    }
}

function next_value() {
    if (c_status == "start") {
        random()
        check_show()
        card_val.textContent += r_value + " "
        counter()


    }
    else {
        card_val.textContent = "Cards Value: "
        sum_val.textContent = "Sum: "
        won_el.textContent = "Status: Game Not Started Click Start Game"
    }
}

function check_show() {
    sum = 0
    for (let i = 0; i < val.length; i++) {
        sum += val[i]
    }
    number_check()
    sum_val.textContent = "Sum: " + sum + ' ';
    won_el.textContent = "Status: " + result

}

function reboot() {
    card_val.textContent = "Cards Value: "
    sum_val.textContent = "Sum: "
    won_el.textContent = "Status: Game Over"
    c_status = " "
}

function counter() {
    if (count < 3) {
        count++;
    }
    else {
        count = 0
        reboot()
    }
}