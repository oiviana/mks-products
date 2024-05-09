import Products from "@/components/Products";
import variables from "./styles/variables.module.scss";
export default function Home() {
  return (
    <>
      <h2 className={variables.test}>oi</h2>
      <Products/>
    </>
  );
}
