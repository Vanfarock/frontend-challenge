import React from 'react';

export default function flexComponent(Component) {
  return (props) => {
    return (
      <div className="flex-1">
        <Component {...props} />
      </div>
    );
  };
}