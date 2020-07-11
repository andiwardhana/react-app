
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    nilai: 0, 
    umur: 37
}

//reducer
const rootReducer = (state = initialState, action) =>{
   // console.log(action);
    // if (action.type === 'UBAH_UMUR') {
    //     return{
    //         ...state,
    //         umur: state.umur + 1,
            
    //     }
    // }
    // if (action.type === 'UBAH_NILAI') {
    //     return{
    //         ...state,
    //         nilai: state.nilai + action.nilaiBaru
    //     }
    // }

    switch (action.type) {
        case 'TAMBAH_UMUR':
            return{
                ...state,
                umur: state.umur + 1,
                        
                    }
         case 'UBAH_NILAI':
            return{
                ...state,
                nilai: state.nilai + action.nilaiBaru,
                        
                    }  
    
        default:
            return state; 
    }
    
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(()=>{
    console.log('ubah store:', store.getState());  
})

//dispatch / action
store.dispatch({type:'TAMBAH_UMUR'})
store.dispatch({type:'UBAH_NILAI', nilaiBaru: 12})
console.log(store.getState());



