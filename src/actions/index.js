import * as types from './../constants/actionTypes';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const removeCartItem = (item) => {
    return {
        type: types.REMOVE_CART_ITEM,
        item
    }
}
export const updateQuantity = (product, value) => {
    return {
        type: types.UPDATE_QUANTITY,
        product,
        value
    }
}