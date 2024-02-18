import '../Basket.css'
import { useContext } from 'react'
import  {CartContext}  from '../contexts/CartContext'
import { Link, useNavigate } from 'react-router-dom'
export default function Basket(){
    const navigate = useNavigate()
    const {getItems} = useContext(CartContext)
    const renderCart = () => {
        const cartItems = getItems();
        debugger;

        if(cartItems.length>0){
            return cartItems.map(item => {
                return (
                <div className='row' key={item.id}>
                    <div className='col'>
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </div>
                    <div className='col text-center'>
                        {item.quantity}
                    </div>
                    <div className='col text-center'>
                        {item.price}
                    </div>
                </div>)

            })
        }else{
            return <div>The basket is empty.</div>
        }
    } 

    return (
        <div className="container-fluid">
            <nav className="navbar ">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Shopping Basket</h3>
                    <form className="d-flex">
                    <button className="btn btn-outline-success">Checkout</button>
                    </form>
                </div>
            </nav>
            <div className="container-fluid pad">
                <div className="row">
                    <div className="col">Item</div>
                    <div className="col text-center">Quantity</div>
                    <div className="col text-center">Price</div>
                </div>
            </div>

            {renderCart && (
                <div className="container-fluid pad">
                    {renderCart()}
                </div>
            )}


            <div className="row d-flex shop-end">
                <div className="col justify-content-start">
                    <button className='btn btn-outline-danger'>Clear</button>
                </div>
                <div className="col text-end">
                    <h4>Total:</h4>
                </div>
            </div>
        </div>
    )
}