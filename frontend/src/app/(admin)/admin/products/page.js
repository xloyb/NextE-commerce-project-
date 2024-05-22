import Listproducts from '@/components/admin/listproducts';
import {fetchArticles} from "@/services/ArticleService"
const getProducts=async()=>{
const data=await fetchArticles()
return data;
}
const ProductPage = async() =>{
 const produits=await getProducts()

 return (
 <div className="container">
 <Listproducts produits={produits}/>
 </div>
 )
}
export default ProductPage 