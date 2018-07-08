import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getInventory } from "./../../redux/navbar";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  updateInventory() {
    console.log('updateInventory hit')
    axios.get(`/api/search?q=${this.state.search}`).then(results => {console.log(results.data),
      this.props.getInventory(results.data)
    });
  }
  render() {
    let up = this.props.search ? "searchContainer" : "searchContainer up";
    return (
      <div className={up}>
        <div className="left">
          <img
            onClick={() => {
              this.updateInventory();
              console.log(this.state.search);
            }}
            src="https://cdn.ccs.com/skin/frontend/enterprise/mobile/images/bkg_search.1529467876.png"
            alt="search logo"
          />
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={e => {
            this.setState({ search: e.target.value });
          }}
        />
        <div className="right">
          <img
            onClick={() => {
              this.props.onClick(!this.props.search);
              this.setState({ search: "" });
            }}
            src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button-close.1529467876.png"
            alt="exit"
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    inventory: state.inventory
  };
}
export default connect(
  mapStateToProps,
  { getInventory }
)(Search);

//bring from store value of
//send to store
