import ActionType from './globalActiontype';

const globalState = {
    totalOrder: 0
  }
  
  //Reducer
  const rootReducer = (state = globalState, action) =>{
    if (action.type === ActionType.TAMBAH_PESANAN) {
      return {
        ...state,
        totalOrder: state.totalOrder + 1
  
      }
    }
  
    if (action.type === ActionType.KURANGI_PESANAN) {
      let totalOrder = 0;
      if (state.totalOrder > 0) {
        totalOrder = state.totalOrder - 1
      }
      return {
        ...state,
        totalOrder: totalOrder
  
      }
    }
  
    return state;
  }

  export default rootReducer;