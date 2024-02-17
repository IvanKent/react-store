export default function Basket(){
    return (
        <div className="container-fluid">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Shopping Basket</h3>
                    <form className="d-flex">
                    <button className="btn btn-outline-success">Checkout</button>
                    </form>
                </div>
                <div className="container-fluid text-left">
                    <div className="row">
                        <div className="col">Item</div>
                        <div className="col">Quantity</div>
                        <div className="col">Price</div>
                    </div>
                </div>
                <div className="d-flex">
                    <button>Clear</button>
                    <h4>Total:</h4>
                </div>
            </nav>
        </div>
    )
}