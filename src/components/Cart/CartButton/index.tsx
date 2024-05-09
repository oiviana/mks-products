"use client";
import { useCart } from "@/contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles.module.scss";

export default function CartButton() {
  const { openCart } = useCart();

  return (
    <button className={styles.openCart} onClick={openCart}>
      <FaShoppingCart />0
    </button>
  );
}
