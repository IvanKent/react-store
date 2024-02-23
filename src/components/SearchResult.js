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
        return products.data.map(product => {
            return <div key={product.id}>
                {product.title}
            </div>
        })
    }


    return (
        <div>
            {products.errorMessage && <div>{products.errorMessage}</div>}
            {query.length>1 && products.data && renderProducts()}
        </div>
    )
}