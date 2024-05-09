"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/getProducts";

export default function Products() {

  const {data, isLoading, error} = useQuery<ProductData>({ queryKey: ['products'], queryFn: getProducts})

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Error: {error.message}</div>;
  console.log(data)
  return (
    <div>
    <h1>Product List</h1>
    <ul>
      {data?.data?.products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
  );
}
