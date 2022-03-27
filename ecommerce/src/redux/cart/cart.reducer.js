import cartactiontypes from "./cart.types"
//  import { additem } from "./cart.actions"
import { addItemToCart } from "./cart.utils"
const initial_state = {
    hidden: true,
    cartItems : []
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
                    cartItems: addItemToCart( state.cartItems, action.payload )
                }
        case cartactiontypes.clearItemfromCart :
            return {
                ...state,
                cartItems:   state.cartItems.filter( 
                    cartItem => cartItem.id!== action.payload.id )
            }
        default:
            return state 
    }
}

export default cartReducer