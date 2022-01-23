let data = ["aa ", "bb "]


function Message() {

    const [Val, SetVal] = React.useState(data);

    return <div>
        <Display />
        <h1>{data}</h1>
        <button type="button" onClick={() => AddData(SetVal)} >Add Data</button>
        <button type="button" onClick={() => RemoveData(SetVal)} >Remove Data</button>
    </div>

}

function AddData(SetVal) {

    data = [...data, ` Value ${data.length} `]
    SetVal((d) => {
        return [...data, ` Value ${data.length} `]
    })

}

function RemoveData(SetVal) {

    data.pop()
    data.length > 0 ?
        (SetVal((d) => {
            console.log(data);
            return [d.pop()]
        })) : <div></div>

}
function Display() {

    return (
        <div><h2>{`You have ${data.length} ${data.length > 1 ? "messages" : "message"} left`}</h2></div>
    )

}
ReactDOM.render(<div>

    <Message />

</div>, document.getElementById("root"))