"use client";
import { useQuery } from "@tanstack/react-query";

export default function Products() {

  const {data, isLoading, error} = useQuery<ProductData>({ queryKey: ['products'], queryFn: async () => {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error('Falha ao carregar os dados');
    }
    return response.json();
  } })

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
