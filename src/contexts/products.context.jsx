import React from "react";
import { createContext, useState, useEffect } from "react";

export const ProductsConext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProducts(products.products);
      });
  }, []);

  const value = { products };

  return (
    <ProductsConext.Provider value={value}>{children}</ProductsConext.Provider>
  );
};

/* export const ProductsContext ({
    declare initial variable
    and set the initial variable with setter function
}) */

/* export const ProductsProvider = ({children}) => {

return (<ProductsConext.Provider>{children}</ProductsConext.Provider>)

} */
