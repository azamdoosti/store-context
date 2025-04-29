
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import {useProducts} from '../context/ProductContext'
import styles from './ProductsPage.module.css'
import Loader from '../components/Loader'
import {ImSearch} from 'react-icons/im'
import {FaListUl} from 'react-icons/fa'
import { filterProducts, searchProducts } from '../helpers/helper'


const ProductsPage = () => {
    const products = useProducts()
    const [search , setSearch] = useState("")
    const [displayed , setDisplayed] = useState([])
    const [query, setQuery] = useState({})

    const [searchParams ,setSearchParams] = useSearchParams()
    console.log(products)
   
    useEffect(()=>{
      setDisplayed(products)
    },[products])


     useEffect(()=>{
      useSearchParams(query)
      let finalProducts = searchProducts(products , query.search)
      finalProducts= filterProducts(filterProducts , query.category)
      setDisplayed(finalProducts)
      console.log(finalProducts)
     },[query])


  const searchHandler =()=>{
    setQuery(query=> createQueryObject(query , {search:search}))
      console.log(search)
    }

  const categoryHandler =(event)=>{
  const {tagName} = event.target
  console.log(tagName)
  const category = event.target.innerText.toLowerCase()
  console.log(category)
  if(tagName!== LI) return;
  setQuery((query)=> createQueryObject(query , {category}))
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
        {!displayed.length && <Loader/>}
        {displayed.map((product)=>{
           return <Card key={product.id} data={product}/>
        })}
      </div>
      <div>
       <div>
        <FaListUl/>
        <p>Categories</p>
       </div>
       <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelry</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
       </ul>
      </div>
      
    </div>
    </>
  )
}

export default ProductsPage
