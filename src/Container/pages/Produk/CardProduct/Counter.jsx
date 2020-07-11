import React from 'react';
// import {connect} from 'react-redux';
// import ActionType from '../../../../redux/reducer/globalActiontype';
//import {RootContext} from '../../../Home/Home';
import {GlobalConsumer} from '../../../../context/context';

class Counter extends React.Component{
    // state = {
    //     order:4
    // }

    // handleCounterChange = (newValue) =>{
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

        
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //         order: this.state.order - 1
    //     }, () =>{
    //         this.handleCounterChange(this.state.order);
    //     })
    //     }
        
    // } ga perlu lagi statement diatas, karena sudah di statement di reducer

    render(){
        console.log(this);
        return(
            <div className="counter">
                <button className="minus" onClick={()=> this.props.dispatch({type: 'KURANGI_PESANAN'})} > - </button>
                <input type="text" value={this.props.state.totalOrder}/>
                 <button className="plus" onClick={() => this.props.dispatch({type: 'TAMBAH_PESANAN'})}> + </button>
            </div> 
        )
    }
}
// const mapStateToProps = (state) => {
//     return{
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         handlePlus: () => dispatch({type:ActionType.TAMBAH_PESANAN}),
//         handleMinus: () => dispatch({type:ActionType.KURANGI_PESANAN}),
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer (Counter);