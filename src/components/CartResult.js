import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan="4" className="text-right font-weight-bold">
                    Tổng Tiền
                </td>
                <td className="font-weight-bold">
                    { this.showTotalAmount(cart) } $
                </td>
            </tr>
        );
    }

    showTotalAmount = (cart) =>{
        var total = 0;
        if(cart.length > 0 ){
            for(var i = 0; i <cart.length; i++){
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
}

export default CartResult;
