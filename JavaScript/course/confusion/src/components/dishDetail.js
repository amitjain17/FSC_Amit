import React from "react";

function DishDetails(props) {
    const Menu = () => {
        return (<div className="MenuList" key={props.dish.id}>
            <div>
                <li className='List'>
                    <h3>Dish Details</h3>
                    <div className='ImageList'>
                        <img src={props.dish.image} alt={props.dish.image} className='Image' />
                    </div>
                    <div className='Description'>
                        <h5>Name: {props.dish.name}</h5>
                        <h6>Price: &#36; {props.dish.price}</h6>
                        <p><b>Description:</b> {props.dish.description}</p>
                    </div>
                </li>
            </div>
        </div>);
    };


    return (
        <div className="container">
            <Menu />
        </div>
    );
}

export default DishDetails;