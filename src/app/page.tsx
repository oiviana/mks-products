import Products from "@/components/Products";
import variables from "./styles/variables.module.scss";
import Header from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}
