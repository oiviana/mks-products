import { LuShoppingBag } from "react-icons/lu";
import styles from "../styles.module.scss";

export default function AddToCart() {
  return (
    <button className={styles.addToCart}>
      <LuShoppingBag size={14} />
      comprar
    </button>
  );
}
