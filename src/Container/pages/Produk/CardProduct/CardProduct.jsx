import React from 'react';
import Counter from './Counter.jsx';
import myimage from '../img/fixie.png';
import '../Produk.css';

class CardProduct extends React.Component{
    render(){
        return(     
            <div className="card">
                <div className="img-thumb-prod">
                    <img src={myimage} alt=""/>
                </div>
                <p className="product-title">Sepeda Fixie Modis Murah Jual Cepat</p>
                <p className="product-price">Rp. 1.200.000</p>
                <Counter />
            </div>
            
        );
    }
}

export default CardProduct