"use client";

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.scss";
import { useState } from "react";
import { CartProductProps } from "../types";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

export default function CartProduct({
  quantity,
  photo,
  name,
  id,
  price,
}: CartProductProps) {
  const [quantityInput, setQuantityInput] = useState(1);
  const { removeItemToCart, addItemToCart } = useCart();

  return (
    <motion.div
      animate={{ y: 40 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
    >
      <div className={styles.productWrapper}>
        <div className={styles.productContent}>
          <button
            className={styles.removeProduct}
            onClick={() => removeItemToCart(id, false)}
            aria-label="Remover item do carrinho"
          >
            <IoClose size={12} />
          </button>
          <div className={styles.imageWrapper}>
            <Image
              src={photo}
              alt="test"
              width={70}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className={styles.productTitle}>{name}</span>
          <div>
            <span className={styles.quantityLabel}>Qtd:</span>
            <div className={styles.quantitySelector}>
              <button
                className={styles.minus}
                onClick={() => removeItemToCart(id, true)}
                aria-label="Diminuir quantidade do produto"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className={styles.plus}
                onClick={() => addItemToCart(id, name, photo, price)}
                aria-label="Aumentar quantidade do produto"
              >
                +
              </button>
            </div>
          </div>
          <span className={styles.price}>R${price.replace(/\.00$/, "")}</span>
        </div>
      </div>
    </motion.div>
  );
}
