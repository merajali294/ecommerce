import { type } from "@testing-library/user-event/dist/type"
import cartactiontypes from "./cart.types"

export const toggleCartHidden = () =>({
    type: cartactiontypes.toggle_cart_hidden
})

export const additem = item =>({
    type: cartactiontypes.additem,
    payload : item
})

export const clearItemfromCart = item =>({
    type: cartactiontypes.clearItemfromCart,
    payload : item
})