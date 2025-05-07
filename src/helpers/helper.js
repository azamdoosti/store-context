
const shortenText = text=>{
    return text.split(" ").slice(0 , 3).join(" ")
}

const searchProducts =(products, search)=>{
    if(!search) return products
    const searchedProducts = products.filter(p => p.title.toLowerCase().includes(search))
    return searchedProducts
}


const filterProducts=(products, category)=>{
    if(!category) return products
    const filteredProducts = products.filter(p=> p.category=== category)
    console.log(filteredProducts)
    return filteredProducts
}

// ترکیب سرچ و کتگوری
const createQueryObject = (currentQuery , newQuery)=>{
    if(currentQuery.category==="all"){
       const {category , ...rest}= currentQuery
       return rest
    }
    if(currentQuery.search===""){
        const {search , ...rest} = currentQuery
        return rest
    }
    return {...currentQuery , ...newQuery}
}


const getInitialQuery = (useSearchParams)=>{
    const query={}
    const category=useSearchParams.get("category")
    const search=useSearchParams.get("search")
    if(category) query.category=category
    if(search) query.search=search
    return query
}


const sumProducts =(products)=>{
const itemsCounter = products.reduce((acc , cur) => acc+cur.quantity , 0)
const total = products.reduce((acc, cur)=> acc+cur.price * cur.quantity , 0).toFixed(2)
return {itemsCounter:itemsCounter , total : total}  
}

const productQuantity =(state , id) =>{
const index= state.selectedItems.findIndex((item) => item.id ===id )
if(index=== -1){
    return 0
} else {
    state.selectedItems[index].quantity
}
}


export {shortenText , searchProducts , filterProducts , createQueryObject , getInitialQuery , sumProducts , productQuantity }