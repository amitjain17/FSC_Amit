import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


function Home(props) {

    // const RenderCard = (item) => {
    //     return (<div>
    //         {/* <Card> */}
    //         < h1 > {item.name}</h1 >
    //         {/* <CardImg src={item.image} alt={item.name} /> */}
    //         {/* <CardBody> */}
    //         < h2 > {item.name}</h2 >
    //         {item.designation ? <p>{item.designation}</p> : null}
    //         < p > {item.description}</p >
    //         {/* </CardBody>
    //              </Card> */}
    //     </div >
    //     );
    // }

    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <div>
                        <Card>
                            <CardImg src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                < h2 > {props.dish.name}</h2 >
                                {props.dish.designation ? <p>{props.dish.designation}</p> : null}
                                < p > {props.dish.description}</p >
                            </CardBody>
                        </Card>
                    </div >
                </div>
                <div className="col-12 col-md m-1">
                    <div>
                        <Card>
                            <CardImg src={props.promotion.image} alt={props.promotion.name} />
                            <CardBody>
                                < h2 > {props.promotion.name}</h2 >
                                {props.promotion.designation ? <p>{props.promotion.designation}</p> : null}
                                < p > {props.promotion.description}</p >
                            </CardBody>
                        </Card>
                    </div >
                </div>
                <div className="col-12 col-md m-1">
                    <div>
                        <Card>
                            <CardImg src={props.leader.image} alt={props.leader.name} style={{ height: "23rem" }} />
                            <CardBody>
                                < h2 > {props.leader.name}</h2 >
                                {props.leader.designation ? <p>{props.leader.designation}</p> : null}
                                < p > {props.leader.description}</p >
                            </CardBody>
                        </Card>
                    </div >
                </div>
            </div>
        </div>
    );
}

export default Home;