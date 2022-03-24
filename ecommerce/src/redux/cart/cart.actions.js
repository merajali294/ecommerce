import { type } from "@testing-library/user-event/dist/type"
import cartactiontypes from "./cart.types"

export const togglecarthidden = () =>({
    type: cartactiontypes.toggle_cart_hidden
})

export const additem = item =>({
    type: cartactiontypes.additem,
    payload : item
})