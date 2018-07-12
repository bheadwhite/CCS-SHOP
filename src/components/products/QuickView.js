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
      }
    };
  }
  
  componentDidMount() {
    axios.get(`/api/getItem/${this.props.match.params.id}`).then(response => {
      this.setState({ item: response.data[0] });
    });
  }
  addItemToCart(id) {
    axios.post(`/api/cart`, this.state.item);
  }
  setCartQuantity() {
    axios.get("/api/cartQuantity").then(res => {
      this.props.setQuantity(res.data.cartQuantity)
    }
    )
  }
  render() {
    return (
      <div className="landing">
        <Nav />
        <Link to="/skateboards">
          <button>Back</button>
        </Link>
        <img src={this.state.item.img} alt={this.state.item.name} />
        <div>
          <h5>{this.state.item.name}</h5>
        </div>
        <div>
          <h3>${this.state.item.price}</h3>
        </div>
        <div>
          <button
            onClick={() => {
              this.addItemToCart(this.state.item.id);
              this.setCartQuantity();
            }}
          >
            add Item to Cart
          </button>
        </div>
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
