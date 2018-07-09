import React, { Component } from "react";
import Navbar from "./../nav/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      item: []
    };
  }
  removeItem(id) {
    axios.delete(`/api/cart/${id}`).then(resp => {
      this.setState({ item: resp.data });
    });
  }

  componentDidMount() {
    axios.get("/api/cart").then(response => {
      this.setState({ item: response.data });
    });
  }
  render() {
    let subtotal = this.state.item.reduce((sub, next) => {
      return sub + next.price;
    }, 0);
    subtotal = (subtotal / 100).toFixed(2);
    const products = this.state.item.map((product, key) => {
      const price = (product.price / 100).toFixed(2);
      return (
        <div key={key}>
          <div className="checkoutNamePrice">
            <img src={product.img} alt={product.name} />
            <div>
              <div>{product.name}</div>
              <div>PRICE:{price}</div>
              <div>
                <Link to="/api/checkout/details">Details</Link>
              </div>
            </div>
            <div>
              <div>
                <button
                  onClick={() => {
                    this.removeItem(product.id);
                  }}
                >
                  REMOVE
                </button>
              </div>
              <div>TOTAL</div>
              <div>${price}</div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="landing">
        <Navbar />
        <div>SHOPPING CART</div>
        {products}
        <div>Subtotal: ${subtotal}</div>
      </div>
    );
  }
}
