
import React, { useState } from 'react'
import Card from '../components/Card'
import {useProducts} from '../context/ProductContext'
import styles from './ProductsPage.module.css'
import Loader from '../components/Loader'
import {ImSearch} from 'react-icons/im'


const ProductsPage = () => {
    const products = useProducts()
    const [search , setSearch] = useState("")
    console.log(products)
    const searchHandler =()=>{
      console.log(search)
    }
  return (
    <>
    <div>
      <input type="text" placeholder="Search" value={search} onChange={e=> setSearch(e.target.value.toLowerCase().trim())} />
      <button className={searchHandler}>
        <ImSearch/>
      </button>
    </div>
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader/>}
        {products.map((product)=>{
           return <Card key={product.id} data={product}/>
        })}
      </div>
      <div>Sidebar</div>
    </div>
    </>
  )
}

export default ProductsPage
