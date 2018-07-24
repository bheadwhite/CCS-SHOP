import React, { Component } from "react";
import Navbar from "./../nav/navbar";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    if(this.props.query){
      this.props.history.push({
        pathname: '/skateboards',
        search: `q=${this.props.query}`
      })
    }
    return (
      <div className="landing main">
        <Navbar />
        <div id="images" className="images">
          <img
            src="https://cdn.ccs.com/media/wysiwyg/nike_HPBdesktop-061918.1529446759.jpg"
            alt="nike ad"
          />
        </div>
        <ul className="logos">
          <li>
            <img
              src="https://cdn.ccs.com/media/wysiwyg/homepage-2.1441417387.jpg"
              alt="nike"
            />
          </li>
          <li>
            <img
              src="https://cdn.ccs.com/media/wysiwyg/adidas-hp-logo-ccs-new.1441417391.jpg"
              alt="adidas"
            />
          </li>
          <li>
            <img
              src="https://cdn.ccs.com/media/wysiwyg/vans-icon-122316.1482516811.jpg"
              alt="vans"
            />
          </li>
          <li>
            <img
              src="https://cdn.ccs.com/media/wysiwyg/homepage-10.1441417387.jpg"
              alt="volcom"
            />
          </li>
          <li>
            <img
              src="https://cdn.ccs.com/media/wysiwyg/ccs-hp-logo.1447264745.jpg"
              alt="css homepage"
            />
          </li>
        </ul>
        <div id="images">
          <img
            src="https://cdn.ccs.com/media/wysiwyg/girlxsubpop_HPBdesktop-061918.1529446790.jpg"
            alt=""
          />
          <img
            src="https://cdn.ccs.com/media/wysiwyg/element_HPBdesktop-061918.1529446816.jpg"
            alt=""
          />
          <img
            src="https://cdn.ccs.com/media/wysiwyg/hpb-desktop-CUSTOM-TOP-SHEET-8-122717.1514405014.jpg"
            alt=""
          />
          <img
            src="https://shop.ccs.com/media/wysiwyg/2018-3-29-HPD-CCS-PANTS-CUFFS.jpg"
            alt=""
          />
          <img
            src="https://cdn.ccs.com/media/wysiwyg/2018-3-30-HPD-CLEARANCE-SALE.1522448540.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    query: state.navbar.query
  };
}
export default connect(
  mapStateToProps,
  {}
)(Landing);