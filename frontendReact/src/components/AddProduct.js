import React, { Component } from "react";
import axios from "axios";
import "./AddProduct.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
    };
  }

  productAdd = () => {
    console.log("submit button clicked");
    axios
      .post("http://localhost:8080/products", {
        id: this.state.id,
        name: this.state.name,
        price: this.state.price,
      })
      .then((response) => {
        console.log("response=>", response);
        if (response.status === 200 || response.status === 201) {
          console.log("response.data==>", response.data);
          alert("Data Saved Successfully");
          this.props.history.push("/ProductList");
        } else {
          alert("Data not Saved");
          // debugger;
          // this.props.history.push("/ProductList");
        }
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">Enter Product Informations</h4>
        <Form className="form">
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="address" sm={2}>
                Price
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.price}
                  placeholder="Enter Price"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row style={{ paddingTop: "20px" }}>
              <Col sm={5}></Col>
              <Col sm={1}>
                <button
                  type="button"
                  onClick={this.productAdd}
                  className="btn btn-success"
                  style={{ backgroundColor: "#007bff" }}
                >
                  Submit
                </button>
              </Col>
              <Col sm={1}>
                <Button style={{ backgroundColor: "#dc3545" }}>Cancel</Button>
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default AddProduct;
