import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const navLink = [
  {
    path: "/electronics",
    name: "Electronics",
  },
  {
    path: "/jewelery",
    name: "Jewelery",
  },
  {
    path: "/mens-cloth",
    name: "Men's clothing",
  },
  {
    path: "/womens-cloth",
    name: "Women's clothing",
  },
];

export default function NavBar() {
  const state = useSelector((state) => state.cartReducer.cartDetails);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          padding: " 15px",
          background: "#38cacf",
          position: "fixed",
          top: "0px",
          width: "100%",
          fontWeight: 400,
          fontSize: "20px",
          zIndex: 6,
        }}
      >
        <NavLink
          to="/"
          style={() => {
            return {
              textDecoration: "none",
              marginRight: "50px",
              color: "green",
            };
          }}
        >
          Shopify
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navLink.map((val, key) => {
              return (
                <NavLink
                  key={key}
                  to={val.path}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      marginRight: "50px",
                      color: isActive ? "black" : "white",
                      fontWeight: isActive ? 700 : "",
                    };
                  }}
                >
                  {val.name}
                </NavLink>
              );
            })}
          </Nav>
          <Nav>
            <NavLink
              to="/cart"
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  color: isActive ? "black" : "white",
                  fontWeight: isActive ? 700 : "",
                };
              }}
            >
              <Stack
                spacing={4}
                direction="row"
                sx={{ color: "action.active" }}
              >
                <Badge color="secondary" badgeContent={state.length}>
                  <AddShoppingCartIcon />
                </Badge>
              </Stack>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
