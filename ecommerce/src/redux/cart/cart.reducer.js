import cartactiontypes from "./cart.types"
import { additem } from "./cart.actions"
import { additemtocart } from "./cart.utils"
const initial_state = {
    hidden: true,
    cartitems : []
}

const cartReducer = ( state=initial_state, action ) => {
    switch( action.type ){
        case cartactiontypes.toggle_cart_hidden :
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartactiontypes.additem :
            return {
                ...state,
                cartitems: additemtocart( state.cartitems, action.payload )
            }
        default:
            return state 
    }
}

export default cartReducer