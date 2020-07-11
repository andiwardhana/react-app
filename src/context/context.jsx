import React, {createContext} from 'react';

export const RootContext = createContext();

//Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return(
        class ParentComp extends React.Component{
            state={
                totalOrder : 5
            }
            dispatch = (action) => {
                if (action.type === 'TAMBAH_PESANAN') {
                    return this.setState({
                    totalOrder: this.state.totalOrder + 1
                })
                }
                
                if (action.type === 'KURANGI_PESANAN') {
                    if (this.state.totalOrder > 0) {
                        return this.setState({
                        totalOrder: this.state.totalOrder - 1   
                })
                }
            }
                
            }
            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
        
    )
}

export default GlobalProvider;

//Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) =>{
    return(
        class ParentConsumer extends React.Component{
            render(){
                return(
                    <Consumer>
                        {
                            value =>{
                                return(
                                    <Children {...this.props}{...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }      
    )
}

