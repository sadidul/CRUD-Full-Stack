import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        console.log("responseProductList==", response);
        this.setState({ productData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //****** This is the callback you are going to pass ********
  onProductDeleted = (id) => {
    this.setState((state) => ({  productData: state.productData.filter(x => x.id !== id) })
    )}
  
  tabRow = () => {
    return this.state.productData.map(object => {
      //********* Passing the callback ************
      return <Table obj={object} key={object.id} onDeleted={this.onProductDeleted} />;
    });
  }
  render() {
    return (
      <div style={{ paddingTop: "25px" }}>
        <h4 align="center">Product List</h4>
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th colSpan="4">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;