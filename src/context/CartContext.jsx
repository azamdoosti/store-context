
import { Children, createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helpers/helper"

const initialState={
  selectedItems:[],
  itemsCounter:0,
  total:0,
  Checkout:false
}

const reducer =({state , action})=>{
 switch(action.type){
  case "ADD_ITEM":
  if (! state.selectedItems.find((item)=> item.id===action.payload.id)){
    state.selectedItems.push({...action.payload , quantity :1 })
    return { 
      ...state,
      ... sumProducts(state.selectedItems) ,
      Checkout : false , 
    }
  }
 

  default:
    throw new Error ("Invalid Action")
 }

}

const CartContext = createContext()
const CartProvider = ({Children}) => {
    const[state , dispatch ]=useReducer(reducer , initialState)
  return (
 <CartContext.Provider value={{state : state , dispatch:dispatch}}>
   {Children}
 </CartContext.Provider>
  )
}


const useCart =()=>{
const {state,dispatch} = useContext(CartContext)
return [state , dispatch]
}
export default CartProvider
export {useCart}