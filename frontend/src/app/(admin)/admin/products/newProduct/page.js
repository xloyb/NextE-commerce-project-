import NewProduct from "@/components/admin/newProductComponent";
import {fetchSCategories} from "@/services/ScategorieService"
const getscategories=async()=>{
 const data=await fetchSCategories()
 return data;
}
const NewProductPage = async() => {
 const scategories=await getscategories()

 return (
 <div>
 <NewProduct scategories={scategories}/>
 </div>
 )
}
export default NewProductPage
