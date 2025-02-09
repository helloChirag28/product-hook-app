// components/ProductForm.tsx
"use client";

import { useState } from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";

const ProductForm = () => {
  const mutation = useCreateProduct(); // ✅ Get mutation object
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !price || !category || !image || !description) {
      alert("Please fill all fields!");
      return;
    }

    mutation.mutate({
      id: Math.random(), // Fake ID since API doesn't store
      title,
      price: parseFloat(price),
      category,
      image,
      description,
    });

    // Reset form fields
    setTitle("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="border p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-2">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={mutation.isPending} // ✅ Use `isPending` instead of `isLoading`
          className="bg-blue-500 text-white p-2 rounded"
        >
          {mutation.isPending ? "Adding..." : "Add Product"}
        </button>
      </form>
      {mutation.error && <p className="text-red-500 mt-2">{mutation.error.message}</p>}
    </div>
  );
};

export default ProductForm;
