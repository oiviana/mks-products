import CartButton from '../Cart/CartButton';
import Logo from './Logo';
import styles from './styles.module.scss'
export default function Header(){
    return(
        <header className={styles.headerContainer}>
  
                <Logo/>
              <CartButton/>
  
        </header>
    );
}