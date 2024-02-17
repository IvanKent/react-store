//cart context to store initial state of the shopping cart

import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";
export const CartContext = createContext();

const initialState = {cartItems: []}

export default function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const addProduct = (payload) => {
        dispatch({type: 'ADD', payload})
    }

    const contextValues = {
        addProduct,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

