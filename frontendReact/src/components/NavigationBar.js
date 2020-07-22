import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to={""} className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
          width="25"
          height="25"
          alt="brand"
        />{" "}
        Product Store
      </Link>
      <Nav className="mr-auto">
        <Link to={"AddProduct"} className="nav-link">
          Product Add
        </Link>
        <Link to={"ProductList"} className="nav-link">
          Product List
        </Link>
      </Nav>
    </Navbar>
  );
}
