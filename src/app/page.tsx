import Products from "@/components/Products";
import variables from "./styles/variables.module.scss";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
export default function Home() {
  return (
    <>
      <Header />
      <Cart/>
      <Products />
    </>
  );
}
