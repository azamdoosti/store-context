import React from 'react'
import { useProducts } from '../context/ProductContext'
import styles from './ProductPage.module.css'

const ProductPage = () => {
  const products = useProducts()
  console.log(products)

  return (
    <div>
        <div className={styles.container}>
          <div className={styles.products}>
          {products.map((product) => <p>{product.title}</p>)} 
          </div>
          <div>sidebar</div>
        </div>
    </div>
  )
}

export default ProductPage