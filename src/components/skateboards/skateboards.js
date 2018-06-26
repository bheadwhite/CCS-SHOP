import React from "react";

function Skateboards({product}) {
  const price = (product.price / 100).toFixed(2);
  return (
    <div className="item">
      <div className="productImage">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="productDetails">
        <p>{product.name}</p>
        <strong>${price}</strong>
      </div>
    </div>
  );
}

export default Skateboards;
