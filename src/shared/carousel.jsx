import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  /* & > ul {
    align-self: flex-start;
  } */
  justify-content: flex-start;
`;

const Dashboard = ({ items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: items.length > 3 ? 3 : items.length - 1,
      partialVisibilityGutter: 55,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: items.length > 3 ? 3 : items.length - 1,
      partialVisibilityGutter: 55,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: items.length > 2 ? 2 : items.length - 1,
      partialVisibilityGutter: 55,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 55,
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