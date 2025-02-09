"use client";

import ProductComponent from "@/app/component/Product";
import { useProducts } from "@/app/hooks/useProducts";
import ProductForm from "../component/ProductForm";

const ProductsPage = () => {
    const { data: products, isLoading, error } = useProducts();
  
    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error fetching products: {error.message}</p>;
  
    return (
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Add New Product Form */}
      <ProductForm />

      {/* Product List */}
      {isLoading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
    );
  };

  export default ProductsPage;