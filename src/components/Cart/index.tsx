"use client"
import styles from './styles.module.scss'
import { useCart } from '@/contexts/CartContext';
import { IoClose } from "react-icons/io5";

export default function Cart(){
 
    
  const { isCartOpen, closeCart } = useCart();
  console.log(isCartOpen)

    return(
        <div className={`${styles.cartWrapper} ${isCartOpen? styles.open : styles.close} `}>
            <div className={styles.cartHeader}>
                <h2>Carrinho de compras</h2>
            <button onClick={closeCart}>
                <IoClose
                size={25}/>
            </button>
            </div>
            <div className={styles.cartContent}>

            </div>
            <div className={styles.cartFooter}>
                <div className={styles.cartFooterTotal}>
                    <span>Total:</span>
                    <span>R$798</span>
                </div>
                <button className={styles.cartBuy}>
                    Finalizar Compra
                </button>

            </div>
          
        </div>
    );
}