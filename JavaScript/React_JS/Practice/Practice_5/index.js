let data = [{ id: 1, status: true }, { id: 2, status: false }, { id: 3, status: true }, { id: 4, status: true }, { id: 5, status: false }];


function Check() {


    return (<div className="class-check"  >

        {data.map(
            (d) => { return d.status ? <div className="box-check" key={d.id} style={{ backgroundColor: "red" }} ></div> : <div className="box-check" key={d.id} style={{ backgroundColor: "black" }}></div> }
        )}

    </div>)
}



ReactDOM.render(<div><Check /></div>, document.getElementById("root"))