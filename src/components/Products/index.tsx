"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/getProducts";
import ProductCard from "./ProductCard";
import styles from "./styles.module.scss"
import { ProductData } from "./types";

export default function Products() {

  const {data, isLoading, error} = useQuery<ProductData>({ queryKey: ['products'], queryFn: getProducts})

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.productsGrid}>
      {data?.data?.products.map((product) => (
          <ProductCard 
          key={product.id}
          name={product.name}
          brand={product.brand}
          description={product.description}
          createdAt={product.createdAt}
          updatedAt={product.updatedAt}
          id={product.id}
          photo={product.photo}
          price={product.price}
          />
      ))}
  </div>
  );
}
