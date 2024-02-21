//cart context to store initial state of the shopping cart

import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";
export const CartContext = createContext();
const Storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const initialState = {cartItems: Storage}

export default function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    //adds an item in the cart
    const addProduct = (payload) => {
        dispatch({type: 'ADD', payload})
        return state.cartItems;
    }
    //removes item in the cart
    const removeProduct = payload => {
        dispatch({type: 'REMOVE', payload})
        return state.cartItems;
    }
    //increase the item quantity in the cart
    const increaseQty = payload => {
        dispatch({type: 'INC_QTY', payload})
        return state.cartItems;
    }
    //decrease item quantity in the cart
    const decreaseQty = payload => {
        dispatch({type: 'DEC_QTY', payload})
        return state.cartItems;
    }
    
    //removes all the items in the cart
    const clearBasket = payload => {
        dispatch({type: 'CLEAR', payload: undefined})
        return state.cartItems;
    }

    //retrieves the items from the basket
    const getItems = () => {
        return state.cartItems;
    }

    //expose all the methods in the provider
    //where it can be used within the application
    const contextValues = {
        addProduct,
        removeProduct,
        increaseQty,
        decreaseQty,
        clearBasket,
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

