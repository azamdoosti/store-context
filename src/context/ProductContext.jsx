import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import api from '../services/config'

const  ProductContext = createContext()
const ProductProvider = ({children }) => {
    const [products , setProducts] = useState([])
     
    useEffect(()=> {
        const fetchProducts = async()=>{

            try {
                const response = await api.get("/products")
                setProducts(response)    
            } catch (error) {
                console.log(error)
            }
              
        }

        fetchProducts()
    },[])

  return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  )
}

const useProducts =() =>{
    const products = useContext(ProductContext)
    return products
}
export {useProducts}
export default ProductProvider