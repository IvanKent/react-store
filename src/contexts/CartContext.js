//cart context to store initial state of the shopping cart

import { createContext } from "react";

export const CartContext = createContext();

const initialState = {cartItems: []}

export default function CartContextProvider({children}) {
    return (
        <CartContext.Provider value={initialState}>
            {children}
        </CartContext.Provider>
    )
}

