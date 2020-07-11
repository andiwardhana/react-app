import React, { Fragment } from 'react';
import myimage from './img/basket.png';
//import myimage2 from './img/pit.png'
import './Produk.css';
import CardProduct from './CardProduct/CardProduct';
import { GlobalConsumer } from '../../../context/context';

// import {connect} from 'react-redux'

class Produk extends React.Component{
    // state = {
    //     order:4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
                            <Fragment>
                            <p>Ini Halaman Produk</p>
                            <hr/>
                            <div className="header">
                                <div className="logo">
                                    <img src="" alt=""/>
                                </div>
                                <div className="troley">
                                    <img src={myimage} alt=""/>
                                    <div className="count">{this.props.state.totalOrder}</div>
                                </div>
                            </div>
                                <CardProduct />
                            </Fragment> 
            
            
        );
    }
}

// const mapStateToProps = state => {
//     return{
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Produk);
export default GlobalConsumer (Produk);