import React, { Component } from 'react';
import Products from './../components/Products';
import { connect } from 'react-redux';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends Component {
    render() {
        return (
            <div>
                <Products>
                    { this.showProducts(this.props.products) }
                </Products>
            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    addToCart={this.props.addToCart}
                    onChangeMessage={this.props.onChangeMessage}
                />
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispactToProps = (dispact, props) => {
    return {
        addToCart : (product, quantity) => {
            dispact(actions.addToCart(product, quantity));
        },
        onChangeMessage : (message) => {
            dispact(actions.changeMessage(message));
        }
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispactToProps)(ProductsContainer);
