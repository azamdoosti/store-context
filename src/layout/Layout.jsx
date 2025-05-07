import {Link} from "react-router-dom"  
import {PiShoppingCartSimpleBold} from "react-icons/pi"
import styles from './Layout.module.css'


const Layout = ({children}) => {
  return (
    <>
    <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/chekout">
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