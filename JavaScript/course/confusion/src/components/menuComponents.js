import React from 'react';
import './menuComponents.css';
import { Link } from 'react-router-dom';

function Menu(props) {
    // const click = (des) => {
    //     setData({ Description: des })
    // }
    // const AfterClick = () => {
    //     if (data.Description != null) {
    //         const temp = [...data.Description];
    //         return (<div className='Description'>
    //             <p>{temp}</p>
    //         </div>);
    //     } else {
    //         return (<div></div>);

    //     }
    // }

    const Comment = props.dishes.comments.map((dat) => {
        return (<div key={dat.id}>{dat.dishId === 0 ?
            (<div className='comment' >
                <h4 >{dat.author}</h4>
                <p><b>Comment: </b>{dat.comment}</p>
                {/* <p>Comments will be written here</p> */}
            </div>) : null}
        </div>
        );
    });

    const menu = props.dishes.dishes.map((val) => {
        return (<div className="MenuList" key={val.id}>
            {/* <div onClick={() => props.onClick(val.id)}> */}
            <div>
                <Link to={`/menu/${val.id}`} >
                    <li className='List'>
                        <div className='ImageList'>
                            <img src={val.image} alt={val.image} className='Image' />
                        </div>
                        <div className='Description'>
                            <h5>{val.name}</h5>
                            {/* <div className='ClickAfter'>
                            <AfterClick />
                        </div> */}
                            {/* <p>{val.description}</p> */}
                        </div>
                    </li>
                </Link>
            </div>
        </div>);
    });

    return (
        <div>
            <div className="Container1">
                {menu}
            </div>
            <h2 style={{ textAlign: 'center' }}>Comments</h2>
            <div className='Comments'>
                {Comment}
            </div>
        </div>
    );
}

export default Menu;