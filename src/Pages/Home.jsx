import React, { useEffect, useState } from "react";
import "../index.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>{product.description || "No description available"}</p>
            <p>Price: ${product.price}</p>
            <p>Status: {product.status || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
