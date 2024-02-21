// reducer function
const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

export default function CartReducer(state, action) {
    // state = an object that represents the current state
    // action = an object that has type and payload (data)

    let index = -1;

    if (action.payload) {
        // checks if the action has a payload property
        // sets index var to the index of the first item that matches the condition
        // sets -1 if no item found
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }

    let newState;

    switch (action.type) {
        case "ADD":
            if (index === -1) {
                // adds an item
                newState = {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            } else {
                // adds item quantity in the cart
                const updatedCartItems = state.cartItems.map((item, i) =>
                    i === index ? { ...item, quantity: item.quantity + 1 } : item
                );
                newState = {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
            break;

        case "REMOVE":
            if (index > -1) {
                // removes item in the cart
                const updatedCartItems = state.cartItems.filter((_, i) => i !== index);
                newState = {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
            break;

        case "INC_QTY":
            if (index > -1) {
                // adds item quantity in the cart
                const updatedCartItems = state.cartItems.map((item, i) =>
                    i === index ? { ...item, quantity: item.quantity + 1 } : item
                );
                newState = {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
            break;

        case 'DEC_QTY':
            if (index > -1) {
                // decrease item quantity in the cart
                const updatedCartItems = state.cartItems.map((item, i) =>
                    i === index ? { ...item, quantity: item.quantity - 1 } : item
                );

                // if the item quantity becomes 0, remove it
                const filteredCartItems = updatedCartItems.filter(item => item.quantity > 0);
                newState = {
                    ...state,
                    cartItems: filteredCartItems,
                };
            }
            break;

        case 'CLEAR':
            // removes all the items in the cart
            newState = {
                ...state,
                cartItems: []
            };
            break;

        default:
            newState = state;
    }
    Storage(newState.cartItems);

    return newState;
}
