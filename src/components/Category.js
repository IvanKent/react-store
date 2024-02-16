import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProducts } from "../fetcher";

import CategoryProduct from "./CategoryProduct";

export default function Category({category, onCategoryClick}){
  const [products, setProducts] = useState({errorMessage: '', data: []})
  const {id} = useParams(); 


  useEffect(() => {
    const fetchedData = async() => {
      const responseObject = await getProducts(id);
      setProducts(responseObject)
    }
    fetchedData();
  }, [id]);


  //renders a list of products
  const renderProducts = () => {
    return products.data.map(product => {
      return <CategoryProduct key={product.id} product={product}/>
    })
  }

    return (
        <>
          {products.data.length>1 && <h1>Products</h1>}
          {/* {products.data.length<1 && <h1>No Products Found!</h1>} */}
          {products.data && renderProducts()}
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        </>
    )
}