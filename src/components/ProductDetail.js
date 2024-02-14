import { getProductById } from "../fetcher"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function ProductDetail(){
    const [product, setProduct] = useState({errorMessage: '', data: []})
    const params = useParams();
    console.log(params.id)
    useEffect(() => {
        const fetchedData = async () => {
            const responseData = await getProductById(params.id);
            console.log(responseData)
            setProduct(responseData)
        };

        fetchedData();
    }, [params.id])
    return (
        <div>
            {product.data.title}
        </div>
    )
}