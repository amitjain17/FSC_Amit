function Form(event) {
    let [data, Setdata] = React.useState({
        fname: "",
        lname: "",
        email: "",
        text: "",
        check_box: true,
        fav_language: "",
        cars: ""
    })

    function DataStored(event) {


        Setdata((prevData) => {
            return {
                ...prevData,
                [event.target.name]: `${event.target.type === "checkbox" ? event.target.checked : event.target.value}`
            }
        })
    }

    function handleSubmit() {
        //submittoAPI(data)
        console.log(data);
        event.preventDefault()

    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" id="fname" placeholder="First Name" name="fname" onChange={DataStored} value={data.fname} />

            <input type="text" id="lname" placeholder="Last Name" name="lname" onChange={DataStored} value={data.lname} />

            <input type="email" id="email" placeholder="Email" name="email" onChange={DataStored} value={data.email} />

            <textarea value={data.text} placeholder="Comment" onChange={DataStored} name="text" />
            <br />

            <input type="checkbox" id="language1" name="check_box" checked={data.check_box} onChange={DataStored} />
            <label htmlFor="language1"> React</label>

            <br />
            <h3>Radio Buttons</h3>
            <input type="radio" id="html" name="fav_language" value="HTML" onChange={DataStored} checked={data.fav_language === "HTML"} />
            <label htmlFor="html">HTML</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" onChange={DataStored} checked={data.fav_language === "CSS"} />
            <label htmlFor="css">CSS</label><br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={DataStored} checked={data.fav_language === "JavaScript"} />
            <label htmlFor="javascript">JavaScript</label>


            <br />
            <br />
            <label htmlFor="cars">Choose a car:</label>
            <p></p>
            <select name="cars" id="cars" onChange={DataStored} value={data.cars}>
                <option value="">--choose--</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <br />
            <br />
            <button type="submit">SUBMIT</button>
        </form>
    </div>)
}

ReactDOM.render(<div>
    <Form />

</div>, document.getElementById("root"))