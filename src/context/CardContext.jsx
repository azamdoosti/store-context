
import { createContext, useReducer } from "react"
const initialState={}
const reducer =()=>{}
const cartContext = createContext()
const CardPRovider = () => {
    const[state , dispatch ]=useReducer(reducer , initialState)
  return (
    <div>CardPRovider</div>
  )
}

export default CardPRovider