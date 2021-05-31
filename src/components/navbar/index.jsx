import React from 'react';
import { NavbarContainer, NavItems, NavItem, Icon, NavCustomLink } from './styles';
import Home from '../../icons/home.svg';
import Book from '../../icons/book.svg';
import User from '../../icons/user.svg';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItems>
        <NavItem>
          <Icon src={Home} />
          <NavCustomLink to="/" exact>Home</NavCustomLink>
        </NavItem>
        <NavItem>
          <Icon src={Book} />
          <NavCustomLink to="/libraries">Libraries</NavCustomLink>
        </NavItem>
        <NavItem>
          <Icon src={User} />
          <NavCustomLink to="/profile">Profile</NavCustomLink>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;