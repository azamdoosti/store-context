import { useParams } from "react-router-dom"
import { useProductDetails } from "../context/ProductContext"
import Loader from "./Loader"
import styles from "./DetailsPage.module.css"


const DetailsPage = () => {
    const {id} = useParams()
    const productDetails = useProductDetails(+id)
    console.log(productDetails)
    if(!productDetails) return <Loader/>

  return (
    <div className={styles.container}>
     <img src={productDetails.iamge} alt={productDetails.titile} />    
     <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
            <SiOpenproject />
            {productDetails.category}</p>
        <div>
            <span className={styles.price}>
                <IoMdPricetag/>
                {productDetails.price} $
            </span>
            <Link to={"/products"}> 
            <FaArrowLeft/>
             <span> Back to Shop</span>
            </Link>
        </div>
     </div>
    </div>
  )
}

export default DetailsPage