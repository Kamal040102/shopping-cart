import {ADD_TO_CART} from './action-types/cart-action'
import {REMOVE_ITEM} from './action-types/cart-action'
import {SUB_QUANTITY} from './action-types/cart-action'
import {ADD_QUANTITY} from './action-types/cart-action'
// import {ADD_SHIPPING} from './action-types/cart-action'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = (id) => {
    return{
        type: REMOVE_ITEM,
        id
    }
}
export const subtractQuantity = (id) =>{
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) =>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

// export const addShipping = (id) =>{
//     return {
//         type: ADD_SHIPPING,
//         id
//     }
// }