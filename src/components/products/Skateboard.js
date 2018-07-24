import React, { Component } from "react";
import axios from "axios";
import "./../landing/landing.css";
import Items from "./Items";
import Navbar from "./../nav/navbar";
import Filter from "./../nav/Filter";
import { connect } from "react-redux";

class Skateboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      run: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.inventory !== this.props.inventory) {
      this.setState({ inventory: nextProps.inventory, run: false });
      this.props.history.push({
        pathname: `/skateboards`,
        search: `q=${nextProps.query}`
      });
    }
  }

  componentDidMount() {
    axios.get("/api/getSkate").then(res => {
      this.setState({ inventory: res.data });
    });
  }

  render() {
    if (!this.props.location.search && this.state.run === false) {
      axios.get("/api/getSkate").then(res => {
        this.setState({
          inventory: res.data,
          run: true
        });
      });
    }
    let products = this.state.inventory;
    if (this.state.inventory.length > 0) {
      products = this.state.inventory.map((product, i) => (
        <Items product={product} key={i} />
      ));
      products.unshift(
        <div className="item graphics" key="f">
          <img
            src="https://cdn.ccs.com/media/the_catalog_cache/the_catalog/metaurl/gallery/mobile_image_path/3020/131/4/x449/ee8544d536df2c2576002c8b61b316b0/CUSTOM_TOP_GRAPHIC_PRODUCT_BLOCK-mobile2-8.1514405151.jpg"
            alt="grip tape graphics"
          />
        </div>
      );
    }
    return (
      <div className="landing">
        <Navbar />
        <Filter />
        {products}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    inventory: state.navbar.inventory,
    query: state.navbar.query
  };
}
export default connect(mapStateToProps)(Skateboard);