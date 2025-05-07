
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import {useProducts} from '../context/ProductContext'
import styles from './ProductsPage.module.css'
import Loader from '../components/Loader'
import { filterProducts, getInitialQuery, searchProducts } from '../helpers/helper'
import SearchBox from '../components/SearchBox'
import SideBar from '../components/SideBar'


const ProductsPage = () => {
    const products = useProducts()
    const [search , setSearch] = useState("")
    const [displayed , setDisplayed] = useState([])
    const [query, setQuery] = useState({})

    const [searchParams ,setSearchParams] = useSearchParams()
    console.log(products)
   
    useEffect(()=>{
      setDisplayed(products)
      setQuery(getInitialQuery(searchParams))
    },[products])


     useEffect(()=>{
      setSearchParams(query)
      setSearch(query.search || "")
      let finalProducts = searchProducts(products , query.search)
      finalProducts= filterProducts(finalProducts , query.category)
      setDisplayed(finalProducts)
      console.log(finalProducts)
     },[query , products])


  return (
    <>  
     <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
      <div className={styles.products}>
        {!displayed.length && <Loader/>}
        {displayed.map((product)=>{
           return <Card key={product.id} data={product}/>
        })}
      </div>
      <SideBar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage
