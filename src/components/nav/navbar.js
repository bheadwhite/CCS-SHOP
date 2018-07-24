import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banners from "./shippingAndExtension";
import Search from "./Search";
import Sidebar from "./Sidebar";
import { setSearch, setMenu } from "./../../redux/navbar";

function Navbar(props) {
  let imgSrc = props.menu
    ? "https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button-close.1529467876.png"
    : "https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button.1529467876.png";
  const { setSearch, setMenu } = props;
  return (
    <div>
      <div className="headerContainer">
        <div className="left">
          <img
            onClick={() => {
              setMenu(!props.menu);
            }}
            src={imgSrc}
            alt="menu logo"
          />
          <img
            onClick={() => {
              setSearch(!props.search);
            }}
            src="https://cdn.ccs.com/skin/frontend/enterprise/mobile/images/bkg_search.1529467876.png"
            alt="search logo"
          />
        </div>
        <Link to="/">
          <img
            src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/logo-mobile.1529467876.png"
            alt="css logo"
          />
        </Link>
        <div className="right">
          <img
            src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/catalog-button-mobile.1529467876.jpg"
            alt="catalog"
          />
          <Link to="/api/cart">
            <img
              src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/mobile-cart.1529467876.png"
              alt="cart"
            />
          </Link>
        </div>
      </div>
      <Search
        search={props.search}
        onClick={() => {
          setSearch();
        }}
      />
      <Sidebar menu={props.menu} />
      <Banners />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.navbar.cart,
    menu: state.navbar.menu,
    search: state.navbar.search
  };
}
export default connect(
  mapStateToProps,
  { setSearch, setMenu }
)(Navbar);
