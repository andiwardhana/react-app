import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import Stateless from './Container/Stateless'
//import YoutubeComponent from './Component/YoutubeComponent'
import * as serviceWorker from './serviceWorker';
import Home from './Container/Home/Home';
// import {createStore} from 'redux'
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalReducer';

// const globalState = {
//   totalOrder: 0
// }

// //Reducer
// const rootReducer = (state = globalState, action) =>{
//   if (action.type === 'TAMBAH_PESANAN') {
//     return {
//       ...state,
//       totalOrder: state.totalOrder + 1

//     }
//   }

//   if (action.type === 'KURANGI_PESANAN') {
//     let totalOrder = 0;
//     if (state.totalOrder > 0) {
//       totalOrder = state.totalOrder - 1
//     }
//     return {
//       ...state,
//       totalOrder: totalOrder

//     }
//   }

//   return state;
// }

// AWALNYA REDUCER DI DEKLARASIKAN DI INDEX.JS SEBELUM DIPINDAH KE globalReducer.js

//Store
// const storeRedux = createStore(rootReducer);

ReactDOM.render(
  // <Provider store={storeRedux}><Home /></Provider>
  <Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
