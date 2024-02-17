import '../Basket.css'

export default function Basket(){
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
                    <div className="col">Quantity</div>
                    <div className="col">Price</div>
                </div>
            </div>

            <div className="container-fluid pad">
                <div className="row">
                    <div className="col">Item</div>
                    <div className="col">Quantity</div>
                    <div className="col">Price</div>
                </div>
            </div>

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