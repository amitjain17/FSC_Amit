import React, { useState } from 'react';
import './menuComponents.css';


function Menu(props) {

    const [data, setData] = useState({ Description: null });
    const click = (des) => {
        setData({ Description: des })
    }
    const AfterClick = () => {
        if (data.Description != null) {
            const temp = [...data.Description];
            return (<div className='Description'>
                <p>{temp}</p>
            </div>);
        } else {
            return (<div></div>);

        }
    }

    const Comment = props.dishes.map((dat) => {
        return (
            <div className='comment' key={dat.id}>
                <h4 >{dat.name}</h4>
                <p>{dat.category}</p>
                <p>{dat.price}</p>
            </div>
        );
    });

    const menu = props.dishes.map((val) => {
        return (<div className="MenuList" key={val.id}>
            <div onClick={() => click(val.description)}>
                <li className='List'>
                    <div className='ImageList'>
                        <img src={val.image} alt={val.image} className='Image' />
                    </div>
                    <div className='Description'>
                        <h5>{val.name}</h5>
                        <div className='ClickAfter'>
                            <AfterClick />
                        </div>
                        {/* <p>{val.description}</p> */}
                    </div>
                </li>
            </div>
        </div>);
    });

    return (
        <div>
            <div className="Container1">
                {menu}
            </div>
            <div className='Comments'>
                <h2 style={{ textAlign: 'center' }}>Comments</h2>
                {Comment}
            </div>
        </div>
    );
}

export default Menu;