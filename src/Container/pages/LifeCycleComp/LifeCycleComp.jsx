import React, { Fragment } from 'react';
import './LifeCycleComp.css';
import {GlobalConsumer} from '../../../context/context'
// import {connect} from 'react-redux'


class LifeCycleComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        }

        console.log('constructor');
        
    }

    static getDerivedStateFromProps (props, state){
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
        // setTimeout(()=>{
        //     this.setState({
        //                 count:2
        //             })
        // }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        console.log('nextState :', nextState);
        console.log('this state :', this.state);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        
        
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
        
    }

    componentWillUnmount(){
        console.log('componentWillMount');
        
    }

    clickChange = () =>{
        this.setState({
            count: this.state.count + 1
        }) 
    }

    render(){
        console.log('render');
        
        return(
            <Fragment>
               <p>Ini Halaman LifeCycle</p>
                <hr/>
                 <button className="btn" onClick={this.clickChange}>Component Button {this.state.count}</button>
                  <hr />
                  <h3>Total order berikut mengikuti jumlah order di halaman produk</h3>
                  <p>Total Order = {this.props.state.totalOrder}</p>
            </Fragment>
        
        )
    }
}

// const mapStateToProps = state => {
//     return{
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComp)
export default GlobalConsumer(LifeCycleComp);