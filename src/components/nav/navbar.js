import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banners from "./shippingAndExtension";
import Search from "./Search";
import Sidebar from "./Sidebar";
import { setSearch, setMenu, resetQuery } from "./../../redux/navbar";
//working on getting props.quantity to display number from sessions' cart

class Navbar extends Component {

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
              onClick={() => {
                setMenu(!this.props.menu);
              }}
              src={imgSrc}
              alt="menu logo"
            />
            <img
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
              src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/catalog-button-mobile.1529467876.jpg"
              alt="catalog"
            />
            <Link to="/cart">
              <img
                src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/mobile-cart.1529467876.png"
                alt="cart"
              />
              <div>{this.props.quantity}</div>
            </Link>
          </div>
        </div>
        <Search
          search={this.props.search}
          onClick={() => {
            setSearch();
          }}
        />
        <Sidebar menu={this.props.menu} />
        <Banners />
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
  { setSearch, setMenu, resetQuery }
)(Navbar);
