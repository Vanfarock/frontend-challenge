import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full border border-red-900">
      <ul className="flex flex-row justify-around">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/libraries">Libraries</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;