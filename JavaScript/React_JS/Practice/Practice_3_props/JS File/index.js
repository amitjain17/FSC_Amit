
// function Main() {
//     return (
//         <div className="main-div">
//             <img src="../City1.jpg" width="180em" className="image"></img>
//             <p className="first-heading">First Heading</p>
//             <p className="sub-heading">Sub Information</p>
//             <div className="contact-info">
//                 <div className="phone-contact">

//                     <img src="../phone-logo.png" width="20px" alt="phoneImage">
//                     </img>
//                     <span>92829328320</span>
//                 </div>

//                 <div className="email-contact">
//                     <img src="../email-logo.png" width="20px"></img>
//                     <span>email@email.com</span>
//                 </div>
//             </div>

//         </div>
//     )
// }
function Call() {
    return (
        <div>
            <Pro image="../City2.jpg" heading="First Topic" info="First topic extra info" number="987654321" email="first@email.com" />

            <Pro image="../City1.jpg" heading="Second Topic" info="second topic extra info" number="2334223232" email="second@email.com" />

            <Pro image="../City3.jpg" heading="Third Topic" info="Third topic extra info" number="3333333321" email="Third@email.com" />


            <Pro image="../City4.jpg" heading="Fourth Topic" info="Fourth topic extra info" number="4444578567" email="Fourth@email.com" />
        </div>
    )
}
function Pro(props) {
    return (
        <div className="main-div">
            <img src={props.image} width="180em" className="image"></img>
            <p className="first-heading">{props.heading}</p>
            <p className="sub-heading">{props.info}</p>
            <div className="contact-info">
                <div className="phone-contact">

                    <img src="../phone-logo.png" width="20px" alt="phoneImage">
                    </img>
                    <span>{props.number}</span>
                </div>

                <div className="email-contact">
                    <img src="../email-logo.png" width="20px"></img>
                    <span>{props.email}</span>
                </div>
            </div>

        </div>


    )

}
ReactDOM.render(<div>  <Call /> </div>, document.getElementById("root"))