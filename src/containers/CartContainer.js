import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as messages from './../constants/message';
import { removeCartItem, changeMessage, updateQuantity } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }
    
    showCartItem = (cart) => {
        var result = <tr><td>{ messages.MMS_CART_EMPTY }</td></tr>;
        if(cart.length > 0){
            result = cart.map( (item, index) => {
                return <CartItem
                            key={index}
                            item={item}
                            index={index}
                            removeCartItem={this.props.removeCartItem}
                            changeMessage={this.props.changeMessage}
                            updateQuantity={this.props.updateQuantity}
                        />
            });
        }
        return result;
    }

    showCartResult = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispactToProps = (dispact, props) => {
    return{
        removeCartItem: (product) => {
            dispact(removeCartItem(product));
        },
        changeMessage: (message) => {
            dispact(changeMessage(message));
        },
        updateQuantity: (product, value) => {
            dispact(updateQuantity(product, value));
        }
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    removeCartItem: PropTypes.func.isRequired,
    changeMessage: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispactToProps)(CartContainer);
