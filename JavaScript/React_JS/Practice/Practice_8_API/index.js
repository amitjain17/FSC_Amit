
function Main() {

    let [data, SetData] = React.useState({})

    let [count, SetCount] = React.useState(1)

    React.useEffect(() => {

        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => SetData(data))

    }, [count])

    return <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <h3>Count {count}</h3>
        <button onClick={() => SetCount((precount) => precount + 1)}>ADD NEW CHARACTER</button>
    </div>
}


ReactDOM.render(<div><Main /></div>, document.getElementById("root"))
