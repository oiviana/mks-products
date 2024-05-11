"use client";
import styles from "./styles.module.scss";
import { useCart } from "@/contexts/CartContext";
import { IoClose } from "react-icons/io5";
import CartProduct from "../Products/CartProduct";

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, totalPrice } = useCart();

  const cartTotalPrice = totalPrice()

  return (
    <div
      className={`${styles.cartWrapper} ${
        isCartOpen ? styles.open : styles.close
      } `}
    >
      <div className={styles.cartHeader}>
        <h2>Carrinho de compras</h2>
        <button onClick={closeCart}
        aria-label="Fechar carrinho">
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
          <div className={styles.cartContent}>
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
          <div className={styles.cartFooter}>
            <div className={styles.cartFooterTotal}>
              <span>Total:</span>
              <span>R$ {cartTotalPrice}</span>
            </div>
            <button className={styles.cartBuy}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}
