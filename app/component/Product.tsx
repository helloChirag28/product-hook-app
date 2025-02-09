"use client";

import { Product } from "../types/product";

interface ProductProps {
    product: Product;
  }

  
  const ProductComponent: React.FC<ProductProps> = ({ product }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mx-auto" />
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
    );
  };

  export default ProductComponent;