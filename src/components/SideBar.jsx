import {createQueryObject} from "../helpers/helper"
import {FaListUl} from 'react-icons/fa'
import styles from './SideBar.module.css'
import { categories  } from "../constants/list"



const SideBar = ({query , setQuery}) => {    
  const categoryHandler =(event)=>{
    const {tagName} = event.target
    console.log(tagName)
    const category = event.target.innerText.toLowerCase()
    console.log(category)
    if(tagName!== LI) return;
    setQuery((query)=> createQueryObject(query , {category}))
  }
 
  
  return (
    <div className={styles.sidebar}>
       <div>
        <FaListUl/>
        <p>Categories</p>
       </div>
       <ul onClick={categoryHandler}>
        {categories.map((item)=>(
            <li 
            key={item.id}
            className={item.type.toLowerCase()=== query.category ?styles.selectee : null }
            >{item.type}</li>
        ))}
       </ul>
      </div>
  )
}

export default SideBar