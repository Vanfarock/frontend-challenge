import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Dashboard = ({ items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 64,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 64,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 64,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 64,
    }
  };

  if (!items.length) {
    return null;
  }
  
  return (
    <Carousel responsive={responsive}
              draggable={true}
              removeArrowOnDeviceType={['mobile', 'tablet']}
              partialVisible={true}>
      {items.map((item, index) => (
        item.content(index)
      ))}
    </Carousel>
  );
};

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dashboard;