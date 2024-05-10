"use client";
import { useCart } from "@/contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles.module.scss";

export default function CartButton() {
  const { openCart,  totalItems } = useCart();
  const totalItemsCount = totalItems();

  return (
    <button className={styles.openCart} onClick={openCart}>
      <FaShoppingCart />{totalItemsCount}
    </button>
  );
}
