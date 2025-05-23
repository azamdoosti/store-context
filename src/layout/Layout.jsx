import {Link} from "react-router-dom"  
import {PiShoppingCartSimpleBold} from "react-icons/pi"
import { useCart } from "../context/CartContext"
import styles from './Layout.module.css'


const Layout = ({children}) => {
  const [state] = useCart()

  return (
    <>
    <header className={styles.header}>
        <Link to="/products">Store </Link>
        <Link to="/checkout">
       <div>
       <PiShoppingCartSimpleBold/>
       {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
       </div>
        </Link>
    </header>
    {children}
    <footer className={styles.footer}>Developed by Me by ❤  </footer>
    </>
  )
}

export default Layout