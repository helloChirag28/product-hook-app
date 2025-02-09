"use client";

import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";


const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  };

  export const useProducts = () => {
    return useQuery<Product[], Error>({
      queryKey: ["products"],
      queryFn: fetchProducts,
    });
  };