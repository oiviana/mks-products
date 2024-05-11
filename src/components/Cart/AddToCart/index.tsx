import { LuShoppingBag } from "react-icons/lu";
import styles from "../styles.module.scss";
import { ProductProps } from "@/components/Products/types";
import { useCart } from "@/contexts/CartContext";

export default function AddToCart(productData: ProductProps) {
  const { addItemToCart } = useCart();
  const { id, name, photo, price } = productData;

  return (
    <button
      className={styles.addToCart}
      onClick={() => addItemToCart(id, name, photo, price)}
      aria-label="Adicionar produto ao carrinho"
      data-testid="add-to-cart"
    >
      <LuShoppingBag size={14} />
      comprar
    </button>
  );
}
