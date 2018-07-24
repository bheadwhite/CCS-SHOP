import React, { Component } from "react";
import Navbar from "./../nav/navbar";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      shippingMethod: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
      grandTotal: 0,
      order: []
    };
  }
  componentDidMount() {
    axios.get("/api/cart").then(res => {
      this.setState({ order: res.data });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  sendOrder() {
    axios.post("/api/submitOrder", this.state).then(res => {
      console.log(res);
    });
  }
  render() {
    let subtotal = this.state.order.reduce((sub, next) => {
      return sub + next.price;
    }, 0);
    let grandtotal = ((subtotal + this.state.shippingMethod) / 100).toFixed(2);
    subtotal = (subtotal / 100).toFixed(2);
    let order = this.state.order.map((item, key) => {
      return (
        <div className="checkoutNamePrice" key={key}>
          <img src={item.img} alt={item.name} />
          <h5> {item.name}</h5>
          <h2> ${(item.price / 100).toFixed(2)}</h2>
        </div>
      );
    });
    return (
      <div className="skateboard landing">
        <Navbar />
        <div className="checkout checkoutHide">
          <h3>
            <span>1</span> shipping
          </h3>
          <form className="checkoutForm" onSubmit={this.handlesubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="user_firstName"
                onChange={e => {
                  this.setState({ firstName: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="user_lastName"
                onChange={e => {
                  this.setState({ lastName: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="user_address"
                onChange={e => {
                  this.setState({ address: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="user_city"
                onChange={e => {
                  this.setState({ city: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="user_state"
                onChange={e => {
                  this.setState({ state: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="zipcode">Zipcode</label>
              <input
                type="text"
                id="zipcode"
                name="user_zip"
                onChange={e => {
                  this.setState({ zip: e.target.value });
                }}
              />
            </div>
            <div className="shippingMethod">
              <h3>
                <span>2</span> Shipping Method
              </h3>
              <label htmlFor="regularShip">
                {<p>Regular(5-7 business days)</p>}
              </label>
              <input
                type="radio"
                id="regularShip"
                name="shippingMethod"
                onClick={() => {
                  this.setState({ shippingMethod: 299 });
                }}
              />
              <label htmlFor="expressShip">
                {<p>Express(2-3 business days</p>}
              </label>
              <input
                type="radio"
                id="expressShip"
                name="shippingMethod"
                onClick={() => {
                  this.setState({ shippingMethod: 1499 });
                }}
              />
            </div>
            <div className="billing">
              <h3>
                <span>3</span> Billing
              </h3>
              <p>Email</p>
              <input
                type="text"
                placeholder="EMAIL"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
              <p>Payment Information</p>
              <input
                type="text"
                placeholder="Card Number"
                onChange={e => {
                  this.setState({ cardNumber: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="MM/YY"
                onChange={e => {
                  this.setState({ expiration: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="CVV"
                onChange={e => {
                  this.setState({ cvv: e.target.value });
                }}
              />
            </div>
            <div className="review">
              <h3>
                <span>3</span> Review &amp; Checkout
              </h3>
              <h4> Review Order </h4>
              <p>Subtotal: ${subtotal}</p>
              <p>Shipping: ${(this.state.shippingMethod / 100).toFixed(2)}</p>
              <h3> TOTAL: ${grandtotal}</h3>
            </div>
            <Link to="/checkout/thankyou">
              <div
                className="placeOrder"
                onClick={() => {
                  this.sendOrder();
                }}
              >
                PLACE ORDER
              </div>
            </Link>
            <h3> Order Details:</h3>
            {order}
          </form>
        </div>
        {/* checkout */}
      </div>
      //   landing
    );
  }
}
function mapStateToProps(state) {
  return {
    inventory: state.navbar.inventory
  };
}
export default connect(
  mapStateToProps,
  {}
)(Checkout);