"use client";
import styles from "./styles.module.scss";
import { useCart } from "@/contexts/CartContext";
import { IoClose } from "react-icons/io5";
import CartProduct from "../Products/CartProduct";

export default function Cart() {
  const { isCartOpen, closeCart } = useCart();

  return (
    <div
      className={`${styles.cartWrapper} ${
        isCartOpen ? styles.open : styles.close
      } `}
    >
      <div className={styles.cartHeader}>
        <h2>Carrinho de compras</h2>
        <button onClick={closeCart}>
          <IoClose size={25} />
        </button>
      </div>
      <div className={styles.cartContent}>
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
        <CartProduct name="APPlE" photo="/test.png" price="200" quantity={0} />
 



  

  
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.cartFooterTotal}>
          <span>Total:</span>
          <span>R$798</span>
        </div>
        <button className={styles.cartBuy}>Finalizar Compra</button>
      </div>
    </div>
  );
}
