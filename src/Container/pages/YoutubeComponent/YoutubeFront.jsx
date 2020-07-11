import React from 'react';
import YoutubeComponent from './YoutubeComponent'

function YoutubeFront() {
    return(
        <div>
            <p>YoutubeComponent</p>
                <hr/>
                <YoutubeComponent time="8.15" title="tech 1" desc="200x ditonton. 2 bulan yang lalu"/>
                <YoutubeComponent time="6.20" title="tech 2" desc="300x ditonton. 1 bulan yang lalu"/>
                <YoutubeComponent time="7.25" title="tech 3" desc="500x ditonton. 3 bulan yang lalu"/>
                <YoutubeComponent /> 
        </div>
            
    )
    
}

export default YoutubeFront;