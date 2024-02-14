import './CategoryProduct.css'
export default function CategoryProduct({product}) {
    return(
        <>
            <div className='productMainContainer'>
                <h2 className='productTitle'>{product.title}</h2>
                <div className='productContainer'>
                    <div className='productImage'>
                        <img src={process.env.PUBLIC_URL + `/assets/${product.image}`} alt={product.description}/>
                    </div>
                    <div className='productDetails'>
                        <h3>Dimension</h3>
                        <h3>{product.specs.dimensions}</h3>
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
                        <button>View Product</button>
                        <button>Add to Basket</button>
                    </div>
                </div>

            </div>
        </>
    )
}