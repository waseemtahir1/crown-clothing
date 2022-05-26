import React, { useEffect, useState } from "react";

const ShopPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  const data = {
    items: [
      { id: 1, name: "Apples", price: "$2" },
      { id: 2, name: "Peaches", price: "$5" },
    ],
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {products.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </div>
  );
};

export default ShopPage;
