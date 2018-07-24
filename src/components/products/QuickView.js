import React, { Component } from "react";
import Nav from "./../nav/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setQuantity } from "./../../redux/navbar";

class QuickView extends Component {
  constructor() {
    super();
    this.state = {
      item: {
        img: "",
        id: "",
        class: "",
        name: "loading..",
        price: "loading.."
      },
      quantity: 1
    };
  }
  
  componentDidMount() {
    axios.get(`/api/getItem/${this.props.match.params.id}`).then(response => {
      this.setState({ item: response.data[0] });
    });
  }
  addItemToCart(id) {
    axios.put(`/api/cart`, this.state.item);
  }
  setCartQuantity() {
    axios.get("/api/cartQuantity").then(res => {
      this.props.setQuantity(res.data.cartQuantity)
    }
    )
  }
  render() {
    console.log(this.state.quantity)
    return (
      <div className="quickView landing">
        <Nav />
        <div className="quickView-backButton">
        <Link to="/skateboards">
          <button>Back</button>
        </Link>
        </div>
        <div className="quickView-img">
        <img src={this.state.item.img} alt={this.state.item.name} />
        </div>
        <div>
          <p>{this.state.item.name}</p>
          <h3>${(this.state.item.price/100).toFixed(2)}</h3>
        </div>
        <div className="quickView-addCart">
          <h3>QTY:</h3>
          <input type='text' value={this.state.quantity} onChange={(e)=>{this.setState({quantity: e.target.value})}}/>
          <button
            onClick={() => {
              this.addItemToCart(this.state.item.id);
              this.setCartQuantity();
            }}
          >
            add to Cart
          </button>
        </div>
        <hr />
        <div className="quickView-sameDayMsg">
        <p>Orders placed by 3pm ET ship out the same day.<i>(business days only)</i></p>
        </div>
        <hr />
        <div className="quickView-DescriptionMsg">
        <h3>DESCRIPTION:</h3>
        <div>
        <p>There's something great in the transormation of a deck themore you skate it. Whether you draw, paint, stencil your own graphic, or let your skating create its own graphic, the CCS Logo deck only gets better with time.</p>
        </div>
        <h3>PRODUCT FEATURES</h3>
        <ul>
          <li>Shape: Popsicle</li>
          <li>Deck Construction: Traditional Maple</li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    quantity: state.navbar.quantity
  };
}
export default connect(
  mapStateToProps,
  { setQuantity }
)(QuickView);