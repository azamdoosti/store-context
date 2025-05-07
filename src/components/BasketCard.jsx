import React from 'react'
import { shortenText } from '../helpers/helper'
import {MdDeleteOutline} from 'react-icons/md'
import styles from './BasketCard.module.css'

const BasketCard = ({data , clickHandler}) => {
const {image , title , quantity  } =data 

  return (
    <div className={styles.card}>
        <img src={image} alt={data.title}/>
        <p>{shortenText(title)}</p>
        <div className={styles.actions}>
            {quantity === 1 && (
                <button onClick={()=> useLinkClickHandler("REMOVE_ITEM", data)}>
                    <MdDeleteOutline/>
                </button>
            )} 
            
            {quantity>1 && 
            <button onClick={()=> useLinkClickHandler("DECREASE", data)}>-</button>}
             <span>{data.quantity}</span>
            <button onClick={()=> useLinkClickHandler("INCREASE", data)}>+</ button>
            
        </div>
    </div>
  )
}

export default BasketCard