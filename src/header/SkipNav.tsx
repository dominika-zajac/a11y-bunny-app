import React from 'react';

export default ({ currentCity }) => (
  <div className="sr-only">
    <a href={`?city=${currentCity}#mainContent`}>Go to main content</a>
  </div>
);
