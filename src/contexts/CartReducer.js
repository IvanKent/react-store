//reducer function

export default function CartReducer(state, action){

    let index = -1;
    if(action.payload){
        index = state.cartItems.findIndex(x => x.id ===action.payload.id)
    }
    switch(action.type){
        case "ADD":
            if (index === -1) {
              // adds an item
              return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
              };
            } else {
              // adds item quantity in the cart
              const updatedCartItems = state.cartItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
              );
              return {
                ...state,
                cartItems: updatedCartItems,
              };
            }
            break;
            
        case "REMOVE":
            if (index > -1) {
                // removes item in the cart
                const updatedCartItems = state.cartItems.filter((_, i) => i !== index);
                return {
                  ...state,
                  cartItems: updatedCartItems,
                };
              }
              break;
        
        case "INC_QTY":
            if(index > -1){
                //adds item quantity in the cart
                const updatedCartItems = state.cartItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
              );
              return {
                ...state,
                cartItems: updatedCartItems,
              };
            }
            break;


        case 'DEC_QTY':
            if(index > -1){
                //decrease item quantity in the cart
                const updatedCartItems = state.cartItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity - 1 } : item
              );
              return {
                ...state,
                cartItems: updatedCartItems,
              };
            }
            break;
        
        case 'CLEAR':
            //removes all the items in the cart
            return {
                ...state,
                cartItems: []
            }
            break;

        default:
    }
    return state;
}