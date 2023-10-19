import React from 'react';

const TotalCostContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default TotalCostContext;