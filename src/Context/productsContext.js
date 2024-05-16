import React from "react";

const productsContext = React.createContext({
  products: [],
  addProducts: () => {},
});

export default productsContext;
