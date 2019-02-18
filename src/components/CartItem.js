import React, { Component } from 'react';
import * as messages from './../constants/message';

class CartItem extends Component {
    removeCartItem = (item) => {
        this.props.removeCartItem(item);
        this.props.changeMessage(messages.MMS_REMOVE_CART_ITEM);
    }

    updateCartItem = (item, value) => {
        this.props.updateQuantity(item.product, value);
        this.props.changeMessage(messages.MMS_UPDATE_CART);
    }

    render() {
        var { item } = this.props;
        return (
            <tr>
                <td>
                    <img alt={item.product.name} width="100" height="100" src={ item.product.image } />
                </td>
                <td className="align-middle">{ item.product.name }</td>
                <td className="align-middle">{ item.product.price } $</td>
                <td className="align-middle">
                    { item.quantity } &nbsp;
                    <button 
                        type="button" 
                        className="btn btn1 btn-danger"
                        onClick={ () => this.updateCartItem(item, -1)}
                    >
                        -
                    </button>
                    <button 
                        type="button" 
                        className="btn btn2 btn-danger"
                        onClick={ () => this.updateCartItem(item, 1)}
                    >
                        +
                    </button>
                </td>
                <td className="align-middle">{ item.product.price * item.quantity } $</td>
                <td className="align-middle">
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => this.removeCartItem(item)}
                    >
                        <i className="fa fa-close"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
