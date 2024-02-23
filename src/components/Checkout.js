import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Checkout(){
    const [form, setForm] = useState({
        name: '',
        email: '',
        shippingAddress1: ''
    })
    const navigate = useNavigate();

    // const errors = {
    //     name: form.name.length === 0,
    //     email: form.email.length === 0,
    //     shippingAddress1: form.shippingAddress1 === 0
    // }
    // const disabled = Object.keys(errors).some((x) => errors[x])

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (evt) => {
        // if(disabled){
        //     evt.preventDefault();
        //     return;
        // }
        navigate('/orderconfirmation');
    }

    return (
        <form className="container-fluid" onSubmit={handleSubmit}>
            <h3>Shopping Checkout</h3>
            <div className="row container-fluid mb-4">
                <div className="col">
                    <div className="row">
                        <div className="col mb-3 mt-2 border-bottom pb-2 font-weight-bold">
                            Your Details
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="name" className="form-label" >Name</label>
                                    <input onChange={handleChange} required
                                    type="text" className="form-control" id="name" placeholder="name"/>
                                </div>
                            </div>
                            <div className="col">
                                <div class="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input onChange={handleChange} required
                                    type="email" className="form-control" id="email" placeholder="email"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mb-3 mt-2 border-bottom pb-2 font-weight-bold">
                            Address Details
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="billingAddress" class="form-label">Billing Address</label>
                                    <textarea onChange={handleChange} required
                                    class="form-control" id="billingAddress" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col">
                                <div class="mb-3">
                                    <label for="shippingAddress" class="form-label">Billing Address</label>
                                    <textarea onChange={handleChange} required
                                    class="form-control" id="shippingAddress" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col d-flex justify-content-end">
                    <button className="btn btn-danger mr-1"
                        onClick={() => navigate('/basket')}
                    >
                        cancel
                    </button>
                    <button className="btn btn-success mr-1"
                    //  disabled={disabled}
                     >
                        Confirm Order
                    </button>
                </div>
        </form>
    )
}