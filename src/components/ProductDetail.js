import { getProductById } from "../fetcher"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import '../ProductDetail.css'

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
        <div className="mainContainer">
            {product.data.title}
            <div className="productContainer">
                <img className='productImage' src={process.env.PUBLIC_URL + `/assets/${product.data.image}`} alt={product.data.description}/>
                <div>
                    <h3>Dimensions</h3>
                    {product.data.specs && <h3>{product.data.specs.dimensions}</h3>}
                    {/* {product.data.specs.capacity ? <h3>Capacity</h3>: null} */}
                    {/* {product.data.specs && <h3>{product.data.specs.capacity}</h3>} */}
                    <h3>Features</h3>
                    <ul>
                        {product.data.features && product.data.features.map((feature,index) => {
                            return <li key={index}>{feature}</li>
                        })}
                    </ul>
                </div>
                <div className='productCheckOut'>
                        <h3>${product.data.price}</h3>
                        <h3>Stock: {product.data.stock}</h3>
                        <button>Add to Basket</button>
                    </div>
            </div>
            <div className="productDescription">
                {product.data.description}
            </div>
        </div>
    )
}