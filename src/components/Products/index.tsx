"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/getProducts";
import ProductCard from "./ProductCard";
import styles from "./styles.module.scss"
import { ProductData } from "./types";
import { ShimmerPostList } from "react-shimmer-effects";
import useDimensions from "@/hooks/useDimensions";

export default function Products() {

  const {data, isLoading, error} = useQuery<ProductData>({ queryKey: ['products'], queryFn: getProducts})
  const device = useDimensions();
  if (isLoading) return (
    <div className={styles.skeletonContainer}>
      <ShimmerPostList postStyle="STYLE_THREE" 
      col={device === 'phone' ? 1 : device === 'tablet' ? 2 : device === 'tablet-large' ? 3 : 4} 
      row={2} 
      gap={30} 
      imageHeight={250}/>
    </div>
  );

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
