"use client";
import styles from "./styles.module.scss";
import { useCart } from "@/contexts/CartContext";
import { IoClose } from "react-icons/io5";
import CartProduct from "../Products/CartProduct";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, totalPrice } = useCart();

  const cartTotalPrice = totalPrice()
  const cartRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: TouchEvent | MouseEvent) {
      if (cartRef.current && event.target instanceof Node && !cartRef.current.contains(event.target)) {
       closeCart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeCart]);

  return (
    <>
    <div
      className={`${styles.cartWrapper} ${
        isCartOpen ? styles.open : styles.close
      } `}
      data-testid="cart"
      ref={cartRef}
    >
      <div className={styles.cartHeader}>
        <h2>Carrinho de compras</h2>
        <button onClick={closeCart}
        aria-label="Fechar carrinho" data-testid='close-cart-button'>
          <IoClose size={25} />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <h2>Seu carrinho está vazio!</h2>
          <h2>Adicione produtos :)</h2>
        </div>
      ) : (
        <>
          <div className={styles.cartContent} data-testid="cart-products">
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                name={item.name}
                photo={item.photo}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
              />
            ))}
          </div>
          <motion.div
      animate={{y: [300, 0]}}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
          <div className={styles.cartFooter}>
            <div className={styles.cartFooterTotal}>
              <span>Total:</span>
              <span>R$ {cartTotalPrice}</span>
            </div>
            <button className={styles.cartBuy}>Finalizar Compra</button>
          </div>
          </motion.div>
        </>
      )}
    </div>
    {isCartOpen && (
        <div
          className={styles.overlay}
          onClick={closeCart}
          data-testid="overlay"
        ></div>
      )}
   </>
  );
}
