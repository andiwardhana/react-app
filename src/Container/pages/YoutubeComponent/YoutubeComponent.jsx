import React from 'react';
//import myimage from '../andi.png';
import './YoutubeComponent.css';


const YoutubeComponent = (props) =>{
    return(
        <div className = "youtube-wrapper">
            <div className="img-thumb">
                <img src="http://placeimg.com/250/150/tech" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time:'00.00',
    title:'blank',
    desc:'descnya blank'
}

export default YoutubeComponent;