

export default function Props(props) {

    return (
        <div className="props-center-div">
            <div className="props-div">
                <img src={require('./images/' + props.item.image)} className='city-img' />

                <h2 className='props-head'>{props.item.heading}</h2>

                <p className='props-scd'>second heading</p>
                <bottom className="props-bottom">
                    <p> social media logo display</p>
                </bottom>

            </div>
        </div>

    )

}