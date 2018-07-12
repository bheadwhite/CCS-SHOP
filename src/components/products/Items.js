import React, { Component } from "react";
import { Link } from "react-router-dom";

class Items extends Component {

  render() {
    const {product} = this.props
    const price = (product.price / 100).toFixed(2);
    return (
      <Link to={`/item/${product.id}`} >
        <div className="item">
          <div className="productImage">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="productDetails">
            <p>{product.name}</p>
            <strong>${price}</strong>
          </div>
        </div>
      </Link>
    );
  }
}

export default Items;
