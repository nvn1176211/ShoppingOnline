import * as types from './../constants/actionTypes';

var data = JSON.parse(localStorage.getItem('cart'));
const initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            var {product, quantity} = action;
            index = findIndex(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.REMOVE_CART_ITEM:
            var { product } = action.item;
            index = findIndex(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_QUANTITY:
            var { product, value } = action;
            index = findIndex(state, product);
            if(index !== -1){
                var newQuantity = state[index].quantity + value;
                if(newQuantity > 0){
                    state[index].quantity = newQuantity;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findIndex = (cart, product) => {
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i<cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;break;
            }
        }
    }
    return index;
}
export default cart;