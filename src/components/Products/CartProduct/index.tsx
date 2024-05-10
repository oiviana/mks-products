'use client'

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function CartProduct({quantity, photo, name}:CartProductProps){

    const [quantityInput, setQuantityInput] = useState(1)
    return(
        <div className={styles.productWrapper}>
        <div className={styles.productContent}>
            <button className={styles.removeProduct}>
                <IoClose
                size={12}/>
            </button>
            <div className={styles.imageWrapper}>
            <Image src={photo}
            alt="test"
            width={70}
            height={60}
            style={{objectFit:"cover"}}/>
            </div>
            <span className={styles.productTitle}>
                {name}
            </span>
            <div>
                <span className={styles.quantityLabel}>Qtd:</span>
                <div className={styles.quantitySelector}>
                    <button className={styles.minus} onClick={()=> setQuantityInput(quantityInput-1)}>-</button>
                    <span>{quantityInput}</span>
                    <button className={styles.plus} onClick={()=> setQuantityInput(quantityInput+1)}>+</button>
                </div>
            </div>
            <span className={styles.price}>
                R$200
            </span>
        </div>
        </div>
    );
}