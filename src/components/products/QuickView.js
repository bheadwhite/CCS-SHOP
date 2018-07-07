import React, { Component } from "react";
import Nav from "./../nav/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default class QuickView extends Component {
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
  render() {
    console.log(this.props);
    return (
      <div className="landing">
        <Nav />
        <Link to="/api/skateboards">
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
            }}
          >
            add Item to Cart
          </button>
        </div>
      </div>
    );
  }
}
