import '../Basket.css'
import { useContext, useState, useEffect } from 'react'
import  {CartContext}  from '../contexts/CartContext'
import { Link, useNavigate } from 'react-router-dom'

import { UpIcon, DownIcon, TrashIcon } from './Icons'
export default function Basket(){
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    const {getItems, clearBasket, increaseQty, decreaseQty, removeProduct } = useContext(CartContext)
    useEffect(() => {
        const cartItems = getItems();
        setCartItems(cartItems);
    }, [getItems])
    const renderCart = () => {
        const cartItems = getItems();

        if(cartItems.length>0){
            return cartItems.map(item => {
                return (
                <div className='row' key={item.id}>
                    <div className='col'>
                        <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </div>
                    <div className='col text-center'>
                        {item.quantity}
                        <UpIcon width={30} onClick={() => setCartItems(increaseQty({id: item.id}))}/>
                        <DownIcon width={30} onClick={() => setCartItems(decreaseQty({id: item.id}))}/>
                        <TrashIcon width={30} onClick={() => setCartItems(removeProduct({id: item.id}))}/>
                    </div>
                    <div className='col text-center'>
                        ${item.price}
                    </div>
                </div>)

            })
        }else{
            return <div>The basket is empty.</div>
        }
    } 

    const renderTotal = () => {
        const cartItems = getItems();
        const total = cartItems.reduce((total, item) => (
            total + item.price * item.quantity
        ), 0)
        return total;
    }

    return (
        <div className="container-fluid">
            <nav className="navbar ">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Shopping Basket</h3>
                    <form className="d-flex">
                    <button className="btn btn-outline-success" onClick={() => navigate('/checkout')}>Checkout</button>
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
                    <button className='btn btn-outline-danger'
                    onClick={() => setCartItems(clearBasket())}
                    >Clear</button>
                </div>
                <div className="col text-end">
                    <h4>Total: ${renderTotal()}</h4>
                    
                </div>
            </div>
        </div>
    )
}