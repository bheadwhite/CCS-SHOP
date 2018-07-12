import React, { Component } from "react";
import Navbar from "./../nav/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {setQuantity} from './../../redux/navbar'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }
  removeItem(id) {
    axios.delete(`/api/cart/${id}`).then(resp => {
      this.setState({ item: resp.data.cart });
    });
  }

  componentDidMount() {
    axios.get("/api/cart").then(response => {
      this.setState({ item: response.data });
    });
  }
  setCartQuantity() {
    axios.get("/api/cartQuantity").then(res => {
      this.props.setQuantity(res.data.cartQuantity)
    }
    )
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
                    this.setCartQuantity()
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
        <Link to="/checkout">
          <button>checkout</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    quantity: state.navbar.quantity}
}
export default connect(mapStateToProps, {setQuantity})(Cart)