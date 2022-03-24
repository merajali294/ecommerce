import cartactiontypes from "./cart.types"

const initial_state = {
    hidden: true
}

const cartReducer = ( state=initial_state, action ) => {
    switch( action.type ){
        case cartactiontypes.toggle_cart_hidden :
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state 
    }
}

export default cartReducer