import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

export default () => (
  <Navbar className="bg-dark navbar-dark navbar-expand">
    <Nav navbar>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/posts">
          Posts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/router">
          Router
        </NavLink>
      </NavItem>
    </Nav>
    <Nav navbar className="ml-auto">
      <NavItem>
        <NavLink href="https://github.com/Selleo/react-developers-workshops">
          GitHub
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);
