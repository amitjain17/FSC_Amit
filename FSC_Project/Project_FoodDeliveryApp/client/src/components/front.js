import React from 'react';
import GridBar from './gridBar.js';


const Front = ({ authorized }) => {

    return (
        <div>
            <GridBar authorized={authorized} />
        </div>
    )

}
export default Front