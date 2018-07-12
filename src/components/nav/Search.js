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
    axios.get(`/api/search?q=${this.state.search}`).then(results => {
      this.props.getInventory(results.data, this.state.search);

    });
  }
  handleSubmit(e){
    e.preventDefault()
  }
  render() {
    let up = this.props.search ? "searchContainer" : "searchContainer up";
    return (
      <div>
          <form className={up} onSubmit={this.handleSubmit}>
          <div className="left">
              <input type='image'
                onClick={() => {
                  this.updateInventory(this.state.search);
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
          <input type='image'
            onClick={() => {
              this.props.onClick(!this.props.search);
              this.setState({ search: "" });
            }}
            src="https://cdn.ccs.com/skin/frontend/enterprise/mobileshopccs/images/menu-button-close.1529467876.png"
            alt="exit"
          />
        </div>
        </form>
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
  { getInventory }
)(Search);

