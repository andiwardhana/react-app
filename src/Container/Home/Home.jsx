import React, { Fragment } from 'react';

import Produk from '../pages/Produk/Produk';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import './Home.css';
import YoutubeFront from '../pages/YoutubeComponent/YoutubeFront';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';
import Controlled from '../pages/controlled/Controlled';


class Home extends React.Component{
    render(){
        return(
            <Router>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">Blog Post</Link>
                            <Link to = "/Produk">Produk</Link>
                            <Link to="/LifeCycle">LifeCycle</Link>
                            <Link to="/YoutubeFront">Youtube</Link>
                            <Link to="/Hooks">Hooks</Link>
                            <Link to="/Controlled">Controlled Component</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/Produk" component={Produk} />
                        <Route path="/LifeCycle" component={LifeCycleComp} />
                        <Route path="/YoutubeFront" component={YoutubeFront} />
                        <Route path="/Hooks" component={Hooks} />
                        <Route path="/Controlled" component={Controlled} />
                    </Fragment>
            </Router>
   
        )
    }
}

export default GlobalProvider(Home);