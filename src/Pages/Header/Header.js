import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="headermargin">
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="fs-3 fw-bold text-white" href="#home">
            <i className="fs-2 text-white fas fa-briefcase-medical"></i>{" "}
            <span className="text-info fs-2">Medi</span>zoid
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-5">
              <NavHashLink
                to="/home#home"
                className="text-white text-decoration-none ms-3"
              >
                Home
              </NavHashLink>
              <NavHashLink
                to="/home#servicess"
                className="text-white text-decoration-none ms-3"
              >
                Service
              </NavHashLink>
              <NavHashLink
                to="/doctor#doctors"
                className="text-white text-decoration-none ms-3"
              >
                Doctors
              </NavHashLink>
              <NavHashLink
                to="/appointment#appointment"
                className="text-white text-decoration-none ms-3"
              >
                Appointment
              </NavHashLink>
              <NavHashLink
                to="/about#about"
                className="text-white text-decoration-none ms-3"
              >
                About Us
              </NavHashLink>
              <NavHashLink
                to="/contact"
                className="text-white text-decoration-none ms-3"
              >
                Contact
              </NavHashLink>
            </Nav>
            <Nav className="ms-auto fs-5">
              {user.email ? (
                <div>
                  <span className="ms-3 name p-2 bg-white rounded">
                    {user.displayName}
                  </span>
                  <button onClick={logOut} className="btn btn-danger ms-3">
                    LogOut
                  </button>
                </div>
              ) : (
                <NavHashLink
                  to="/login#login"
                  className="text-white text-decoration-none ms-2 btn btn-danger"
                >
                  SignIn
                </NavHashLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
