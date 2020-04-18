import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "rbx";
import logo from "../assets/logo_branca.png";

const Header = () => {
  return (
    <Navbar color="danger">
      <Navbar.Brand>
        <Navbar.Item href="#">
          <img
            src={logo}
            alt="X Lung logo"
            role="presentation"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Link to="/" className="navbar-item">
            Pagina Inicial
          </Link>
          <Link to="/list" className="navbar-item">
            Grupos de Doenças
          </Link>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Header;
