import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../dashboard';
import { SectionContainer,
         SectionTitle } from './styles';

const Section = ({ title, items }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <Dashboard items={items} />
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section;