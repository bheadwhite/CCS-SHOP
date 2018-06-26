import React, { Component } from "react";
import axios from "axios";
import "./../landing/landing.css";
import Skateboards from "./skateboards";
import Navbar from "./../nav/mobile/navbar";
import Banners from "./../nav/mobile/shippingAndExtension";
import Filter from "./../nav/mobile/Filter";
import Sidebar from "./../nav/mobile/Sidebar";
import Search from "./../nav/mobile/Search";
import { connect } from "react-redux";
import { setMenu } from "./../../redux/navbar";
import { setSearch } from "./../../redux/navbar";

class Skateboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    axios.get("/api/getSkate", console.log("loading mount")).then(res => {
      console.log("comp did mount");
      this.setState({ inventory: res.data });
    });
  }
  render() {
    const products = this.state.inventory.map((product, i) => (
      <Skateboards product={product} key={i} />
    ));
    products.unshift(
      <div className="item graphics" key="f">
        <img
          src="https://cdn.ccs.com/media/the_catalog_cache/the_catalog/metaurl/gallery/mobile_image_path/3020/131/4/x449/ee8544d536df2c2576002c8b61b316b0/CUSTOM_TOP_GRAPHIC_PRODUCT_BLOCK-mobile2-8.1514405151.jpg"
          alt="grip tape graphics"
        />
      </div>
    );
    const { setMenu, setSearch } = this.props;
    return (
      <div className="landing">
        <Navbar
          menu={this.props.menu}
          onClick={() => {
            setMenu(!this.props.menu);
          }}
          onClickSearch={() => {
            setSearch(!this.props.search);
          }}
        />
        <Search
          search={this.props.search}
          onClick={() => {
            setSearch(!this.props.search);
          }}
        />
        <Sidebar menu={this.props.menu} />
        <Banners />
        <Filter />
        {products}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    menu: state.navbar.menu,
    search: state.navbar.search
  };
}
export default connect(
  mapStateToProps,
  { setMenu, setSearch }
)(Skateboard);
