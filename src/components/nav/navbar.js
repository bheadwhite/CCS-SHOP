import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banners from "./shippingAndExtension";
import Search from "./Search";
import Sidebar from "./Sidebar";
import {
  setSearch,
  setMenu,
  resetQuery,
  getInventory
} from "./../../redux/navbar";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  updateInventory() {
    axios.get(`/api/search?q=${this.state.search}`).then(results => {
      this.props.getInventory(results.data, this.state.search);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.updateInventory(this.state.search)
  }
  render() {
    let imgSrc = this.props.menu
      ? "https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button-close.1529467876.png"
      : "https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button.1529467876.png";
    const { setSearch, setMenu, resetQuery } = this.props;
    return (
      <div className="navbar">
        <div className="headerContainer">
          <div className="left">
            <img
              className="mobile"
              onClick={() => {
                setMenu(!this.props.menu);
              }}
              src={imgSrc}
              alt="menu logo"
            />
            <img
              className="mobile"
              onClick={() => {
                setSearch(!this.props.search);
              }}
              src="https://cdn.ccs.com/skin/frontend/enterprise/mobile/images/bkg_search.1529467876.png"
              alt="search logo"
            />
          </div>
          <Link to="/">
            <img
              onClick={() => {
                resetQuery();
              }}
              src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/logo-mobile.1529467876.png"
              alt="css logo"
            />
          </Link>
          <div className="right">
            <img
              className="mobile"
              src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/catalog-button-mobile.1529467876.jpg"
              alt="catalog"
            />
            <Link to="/cart">
              <img
                className="mobile"
                src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/mobile-cart.1529467876.png"
                alt="cart"
              />
              <div className="navIcons">
                <img
                  className="desktop cart"
                  src="https://cdn.ccs.com/skin/frontend/enterprise/shopccs/images/cart-icon-top-nav-none.1531368702.png"
                  alt="cart icon"
                />
                <div>{this.props.quantity}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="desktop navbarBanner">
          <div>
            <h3>New Arrivals</h3>
            <h3
              onMouseOver={() => {
                setMenu(!this.props.menu);
              }}
            >
              skate
            </h3>
            <h3>snow</h3>
            <h3>shoes</h3>
            <h3>sale</h3>
          </div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div>
              <input
                type="text"
                value={this.state.search}
                onChange={e => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="SEARCH"
              />
              <img
                className="searchIcon"
                onClick={() => {
                  this.updateInventory(this.state.search);
                }}
                src="https://cdn.ccs.com/skin/frontend/enterprise/shopccs/images/bkg_search-input-dark.png"
                alt="search logo"
              />
            </div>
          </form>
        </div>
        <Search
          search={this.props.search}
          onClick={() => {
            setSearch();
          }}
        />
        <Sidebar menu={this.props.menu} />
        <div className="mobile">
          <Banners />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.navbar.cart,
    menu: state.navbar.menu,
    search: state.navbar.search,
    quantity: state.navbar.quantity
  };
}
export default connect(
  mapStateToProps,
  { setSearch, setMenu, resetQuery, getInventory }
)(Navbar);
