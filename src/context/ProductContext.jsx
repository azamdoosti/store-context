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

const useProductDetails=(id) =>{
    const products = useContext(ProductContext)
    const result = products.find((product) => product.id === id)
    return result
}

export {useProducts , useProductDetails}
export default ProductProvider