import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <section>
        <h1 className="m-t-0">Danh Sách Sản Phẩm</h1>
        <div className="row">
          { this.props.children }
        </div>
      </section>
    );
  }
}

export default Products;
