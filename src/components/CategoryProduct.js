import { Link, useNavigate } from 'react-router-dom'

import '../CategoryProduct.css'
import styled from 'styled-components';


//sample using styled-components 
const ProductTitle = styled.h2`
    color: red;
    font-size: 20px;
`;

export default function CategoryProduct({product}) {
    const navigate = useNavigate();
    return(
        <>
            <div className='productMainContainer'>
                <ProductTitle>
                    <Link to={`products/${product.id}`}>
                        {product.title}
                    </Link>
                </ProductTitle>
                <div className='productContainer'> 
                        <img className='productImage' src={process.env.PUBLIC_URL + `/assets/${product.image}`} alt={product.description}/>
                    <div className='productDetails'>
                        <h3>Dimension</h3>
                        <h3>{product.specs.dimensions}</h3>
                        {product.specs.capacity && <h3>Capacity</h3>}
                        <h3>{product.specs.capacity}</h3>
                        <h3>Features</h3>
                        <ul>
                            {product.features && product.features.map((feature,index) => {
                                return <li key={index}>{feature}</li>
                            })}
                        </ul>
                    </div>
                    <div className='productCheckOut'>
                        <h3>${product.price}</h3>
                        <h3>Stock: {product.stock}</h3>
                        <button onClick={() => navigate(`products/${product.id}`)}>
                            View Product
                        </button>
                        <button>Add to Basket</button>
                    </div>
                </div>

            </div>
        </>
    )
}