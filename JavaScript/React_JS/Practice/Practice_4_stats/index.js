function Main() {

    const [count, setcount] = React.useState(0);
    return (<div className="main-div">
        <div className="circle-indicator">
            <h1 className="Number">{count}</h1>
            <button type="button" className="btn" onClick={() => setcount(count + 1)}>+</button>
            <button type="button" className="btn" onClick={() => setcount(count - 1)}>-</button>
        </div>
    </div>)
}



ReactDOM.render(<div>
    <Main />
</div>, document.getElementById("root"));