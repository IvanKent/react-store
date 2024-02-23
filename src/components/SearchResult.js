import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { getProductsByQuery } from "../fetcher"
export default function SearchResult() {
    const [products, setProducts] = useState({
        errorMessage: '',
        data: []
    });

    
    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');
    console.log(query)
    useEffect(() => {
        const fetchedData = async () => {
            const responseData = await getProductsByQuery(query);
            setProducts(responseData);
        }
        fetchedData();
    }, [query]);

    const renderProducts = () => {
        if(products.data > 0 ){
        return products.data.map(product => {
            return <div key={product.id}>
                {product.title}
            </div>
        })}else{
            return <div>No results found</div>
        }
    }


    return (
        <div>
            {products.errorMessage && <div>{products.errorMessage}</div>}
            {products.data && renderProducts()}
        </div>
    )
}