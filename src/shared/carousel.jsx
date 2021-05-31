import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  justify-content: flex-start;
  height: 100%;
  overflow-y: visible;
`;

const Dashboard = ({ items }) => {
  const gutter = items.length > 1 ? 55 : 0; 
  const totalItems = items.length > 1 ? items.length - 1 : 1;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: items.length > 3 ? 3 : totalItems,
      partialVisibilityGutter: gutter,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: items.length > 3 ? 3 : totalItems,
      partialVisibilityGutter: gutter,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: items.length > 2 ? 2 : totalItems,
      partialVisibilityGutter: gutter,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: gutter,
    }
  };

  if (!items.length) {
    return null;
  }
  
  return (
    <StyledCarousel responsive={responsive}
              draggable={true}
              removeArrowOnDeviceType={['mobile', 'tablet']}
              partialVisible={true}>
      {items.map(item => (
        item.content()
      ))}
    </StyledCarousel>
  );
};

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dashboard;