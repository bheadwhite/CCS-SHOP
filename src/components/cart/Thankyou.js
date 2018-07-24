import React, { Component } from "react";
import Navbar from "./../nav/navbar";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Thankyou extends Component {
    constructor(){
        super()
        this.state={
            recents: []
        }
    }
  componentDidMount() {
    axios.get("/api/lastThree").then(resp => {
        this.setState({recents: resp.data})
    });
  }
  render() {
      console.log(this.state.recents)
      let recents = this.state.recents.map((item, key)=> {
          return (<div key={key}>
          {`Customer Name: ${item.firstname} ${item.lastname} ` }
              {item.name}
              </div>)
      })
    return (
      <div className="landing">
        <Navbar />
        Thankyou for your order.
        <Link to="/">back to main page</Link>
        <div>recent orders</div>
        {recents}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    inventory: state.navbar.inventory
  };
}
export default connect(
  mapStateToProps,
  {}
)(Thankyou);