import React, { Component } from 'react';
import * as messages from './../constants/message';


class Product extends Component {

    showRating = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(
                <li key={i}><i className="fa fa-star"></i></li>
            )
        }
        for (var j = 1; j <= (5-rating); j++) {
            result.push(
                <li key={rating+j}><i className="fa fa-star-o"></i></li>
            )
        }
        return result;
    }

    onAddToCart = (product, quantity) => {
        this.props.addToCart(product, quantity);
        this.props.onChangeMessage(messages.MMS_SUCCESS);
    }

    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mo-1">
                <div className="card">
                    <img className="card-img-top" alt={product.name} src={product.image} />
                    <div className="card-body">
                        <h4 className="card-title text-center">{product.name}</h4>
                        <ul className="rating text-center">
                            { this.showRating(product.rating) }
                        </ul>
                        <p className="card-text text-center">{product.description}</p>
                    </div>
                    <div className="card-footer card-footer-1 d-flex justify-content-between align-items-baseline">
                        <span className="price">{product.price} $</span>
                        <span>
                            <a 
                                className="btn btn-primary wi-100" 
                                onClick={ () => this.onAddToCart(product, 1) }
                            >
                                <i className="fa fa-shopping-cart i-c"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
