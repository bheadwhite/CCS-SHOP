import React, { Component } from "react";
import axios from "axios";
import "./../landing/landing.css";
import Skateboards from "./skateboards";
import Navbar from "./../nav/navbar";
import Filter from "./../nav/Filter"

export default class Skateboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    axios.get("/api/getSkate", console.log("loading mount")).then(res => {
      console.log("comp did mount");
      console.log(res.data);
      this.setState({ inventory: res.data});
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
    return (
      <div className="landing">
        <Navbar />
        <Filter />
        {products}
      </div>
    );
  }
}
