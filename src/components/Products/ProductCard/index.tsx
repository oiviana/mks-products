import Image from "next/image";
import styles from "../styles.module.scss";
import AddToCart from "@/components/Cart/AddToCart";
import { ProductProps } from "../types";

export default function ProductCard({name, price, description, photo,id}:ProductProps){
    const priceFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
 
      });
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image alt={name} width={220} height={139} src={photo}  style={{objectFit:"contain"}}/>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.productTitle}>
          <h3>{name}</h3>
          <span> {priceFormatter.format(Number(price))}</span>
        </div>
        <span className={styles.productDescription}>{description}</span>
        <AddToCart 
        name={name} 
        id={id}
        photo={photo}
        price={price}
        />
      </div>
    </div>
  );
}
