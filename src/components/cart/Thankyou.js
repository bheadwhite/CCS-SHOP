import React, { Component } from "react";
import Navbar from "./../nav/navbar";
import axios from "axios";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class Thankyou extends Component {
    componentDidMount(){
        axios.get('/api/lastThree').then(resp => {
            console.log(resp)
        })
    }
  render() {
    return (
      <div className="landing">
        <Navbar />
        Thankyou for your order.
        <Link to='/'>back to main page</Link>
        <div>recent orders</div>
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
