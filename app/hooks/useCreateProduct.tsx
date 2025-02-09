// hooks/useCreateProduct.ts
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "../types/product";

const createProduct = async (newProduct: Product): Promise<Product> => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] }); // Refresh products list
    },
  });
};
