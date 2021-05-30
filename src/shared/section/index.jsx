import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../carousel';
import { SectionContainer,
         SectionHeader,
         SectionTitle,
         SectionViewMore } from './styles';

const Section = ({ title, viewMoreLabel, viewMoreTo, items }) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionViewMore to={viewMoreTo}>{viewMoreLabel}</SectionViewMore>
      </SectionHeader>
      <Dashboard items={items} />
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  viewMoreLabel: PropTypes.string.isRequired,
  viewMoreTo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Section;