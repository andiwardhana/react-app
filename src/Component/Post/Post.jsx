import React from 'react';


export default function Post(props) {
    return(
        <div className="post">  
                    
        <div className="img-thumb">
            <img src="http://placeimg.com/250/150/tech" alt="dummy"/>
        </div>
        <div className="content">
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div> 
        </div>
    )

    
}