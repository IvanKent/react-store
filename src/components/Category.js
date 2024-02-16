//

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProducts } from "../fetcher";

import CategoryProduct from "./CategoryProduct";

export default function Category({category, onCategoryClick}){
  //sets initial data
  const [products, setProducts] = useState({errorMessage: '', data: []})
  const {id} = useParams(); //gets the id from the URL


  useEffect(() => {
    //function to fetch data from the fetcher
    const fetchedData = async() => {
      const responseObject = await getProducts(id);
      setProducts(responseObject) 
    }
    fetchedData(); //calls the function
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
          {products.data && renderProducts()}
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        </>
    )
}