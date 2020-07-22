import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Table extends Component {
  deleteProduct = () => {
    console.log("delete button clicked");
    axios
      .delete("http://localhost:8080/products/" + this.props.obj.id)
      .then((res) => {
        if (res.status === 200) {
          alert("getStatusInDelete");
          //****** Invoke the callback after successfully deleted *****
          this.props.onDeleted(this.props.obj.id);
        } else {
          console.log("Not refresh");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.price}</td>
        <td>
          <Link
            to={"/EditProduct/" + this.props.obj.id}
            className="btn btn-success"
          >
            Edit
          </Link>
        </td>
        <td>
          <button
            type="button"
            onClick={this.deleteProduct}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Table;
