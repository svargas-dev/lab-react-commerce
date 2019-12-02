import React, { Component } from "react";
import "./style.css";

class Products extends Component {
  render() {
    return (
      <div className="card col-md-3 m-3">
        <img src={this.props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text list-style-none">
            Number of colors: {this.props.colors}<br />
            Number of units left: {this.props.unitsLeft} <br />
            €{this.props.price}<br />
          </p>
        </div>
      </div>
    );
  }
}

export default Products;
