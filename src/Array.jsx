import React from "react";

function Array() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} style={{ color: product.isFruit ? 'purple' : 'green' }}>
          {product.title}
        </li>
      ))}
    </ul>
  );
}

export default Array;
