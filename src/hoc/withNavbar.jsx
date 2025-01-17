import React from 'react';
import PropTypes from 'prop-types';
import FlexComponent from './flexComponent';
import Navbar from '../components/navbar';


export default function WithNavbar({ Component, ...other}) {
  return (
    <>
      <FlexComponent Component={Component} {...other} />
      <Navbar />
    </>
  );
}

WithNavbar.propTypes = {
  Component: PropTypes.func.isRequired,
}