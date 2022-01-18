function Nav() {
    return (
        <nav className="nav-class">
            <img src="../ReactLogo.png" className="react-img" alt="react-logo"></img>
            <header className="header">
                <h1>My First React Page</h1>
                <ul className="list-content">
                    <li className="list-bullet">
                        First
                    </li>
                    <li className="list-bullet">Second</li>
                    <li className="list-bullet">
                        Third
                    </li>
                </ul>
            </header>
        </nav>
    );
}



function MainContent() {
    return (
        <maincontent className="main-content">
            <h1 className="main-content-heading">This is the heading of details</h1>
            <ol className="order-list">
                <li>First Line</li>
                <li>Second Line</li>
                <li>
                    Third Line
                </li>
            </ol>
        </maincontent>
    )
}

function Foot() {

    return (
        <footer>
            <small>&copy;2022  Last Line of the Page</small>
        </footer>
    )
}

ReactDOM.render(<div>
    <Nav />
    <MainContent />
    <Foot />
</div >,
    document.getElementById("root"))