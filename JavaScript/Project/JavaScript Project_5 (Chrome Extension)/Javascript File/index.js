let data_array = []

let input_el = document.getElementById("input-el")

let button_el = document.getElementById("btn-el")

let un_list = document.getElementById("uo-list")

let dl_el = document.getElementById("dl-el")

let tab_el = document.getElementById("tab-el")

let sta = document.getElementById("status")

if (JSON.parse(localStorage.getItem("save_url"))) {
    data_array = JSON.parse(localStorage.getItem("save_url"));
    console.log(data_array);
    show_local_storage()
}

button_el.addEventListener("click", function () {
    if (input_el.value) {
        sta.textContent = ""

        data_array.push(input_el.value)
        un_list.textContent = ""

        localStorage.setItem("save_url", JSON.stringify(data_array))
        show_local_storage()

        input_el.value = ""
    }
    else {
        sta.textContent = "INPUT VALID URL"
    }
})


function show_local_storage() {
    let l_array = []
    l_array = JSON.parse(localStorage.getItem("save_url"));

    for (let i = 0; i < l_array.length; i++) {

        un_list.innerHTML += "<li id='lo_list'><a href=" + l_array[i] + " target='_blank'>" + l_array[i] + "</a></li>"

    }
}

dl_el.addEventListener("dblclick", () => {
    sta.textContent = ""
    localStorage.clear()
    data_array = []
    un_list.innerHTML = ""

})

//Copy Chrome tab link to local Storage

tab_el.addEventListener("click", () => {
    sta.textContent = ""
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].url);

        data_array.push(tabs[0].url)
        un_list.textContent = ""

        localStorage.setItem("save_url", JSON.stringify(data_array))
        show_local_storage()

        input_el.value = ""
    })
}

)