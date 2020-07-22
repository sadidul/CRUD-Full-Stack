import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import "./AddProduct.css";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: "",
      name: "",
      price: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/products/" + this.props.match.params.id)
      .then((response) => {
        console.log("responseEdit=>", response.data);
        this.setState({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onSubmit(e) {
    // debugger;
    e.preventDefault();
    const obj = {
      id: this.props.match.params.id,
      name: this.state.name,
      price: this.state.price,
    };
    axios.post("http://localhost:8080/products/", obj).then((res) => {
      if (res.status === 200 || res.status === 201) {
        console.log("resEditPost=>", res.data);
        alert("successfully edited");
        this.props.history.push("/ProductList");
      } else {
        alert("not edited");
      }
    });

    // debugger;
  }

  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">Update Product Informations</h4>
        <Form className="form" onSubmit={this.onSubmit}>
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  placeholder="Enter name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="price" sm={2}>
                Price
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.onChangePrice}
                  placeholder="Enter price"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Button type="submit" color="success">
                  Submit
                </Button>{" "}
              </Col>
              <Col sm={1}>
                <Button color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}
export default EditProduct;
