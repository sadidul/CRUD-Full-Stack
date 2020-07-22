import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <NavigationBar />
      {/* <div className="App">
        <h1>Hello</h1>
      </div> */}
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              {/* <Route path="/" exact component={} /> */}
              <Route exact path="/AddProduct" component={AddProduct} />
              <Route exact path="/ProductList" component={ProductList} />
              <Route exact path="/EditProduct/:id" component={EditProduct} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
