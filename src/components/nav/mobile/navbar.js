import React from "react";
import { connect } from "react-redux";
import { getCart } from "./../../../redux/navbar";

function Navbar(props) {
  const { getCart } = props;
  let imgSrc = props.menu
    ? "https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button-close.1529467876.png"
    : "https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button.1529467876.png";

  return (
    <div className="headerContainer">
      <div className="left">
        <img
          onClick={() => {
            props.onClick();
          }}
          src={imgSrc}
          alt="menu logo"
        />
        <img
          onClick={() => {
            props.onClickSearch();
          }}
          src="https://cdn.ccs.com/skin/frontend/enterprise/mobile/images/bkg_search.1529467876.png"
          alt="search logo"
        />
      </div>
      <img
        src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/logo-mobile.1529467876.png"
        alt="css logo"
      />
      <div className="right">
        <img
          src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/catalog-button-mobile.1529467876.jpg"
          alt="catalog"
        />
        <img
          onClick={() => {
            console.log(props.cart);
          }}
          src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/mobile-cart.1529467876.png"
          alt="cart"
        />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.navbar.cart
  };
}
export default connect(
  mapStateToProps,
  { getCart }
)(Navbar);
