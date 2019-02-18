import React, { Component } from 'react';

class Cart extends Component {
    render() {
        var { children } = this.props;
        return (
            <section className="mg-20">
                <div className="table-reponsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Tiền</th>
                            </tr>
                            {children}
                        </thead>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;
