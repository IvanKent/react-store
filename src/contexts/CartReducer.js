//reducer function

export default function CartReducer(state, action){
    debugger;

    let index = -1;

    if(action.payload)
        index = state.cartItems.findIndex(x => x.id ===action.payload.id)

    switch(action.type){
        case "ADD":
        case "INC_QTY":
            if(index === -1){
                state.cartItems.push({...action.payload, quantity: 1})
            }else{
                //adds item quantity in the cart
                state.cartItems[index].quantity++;
            }
            break;
            
        case "REMOVE":
            if(index>-1){
                //removes item in the cart
                state.cartItems.splice(index,1)
            }
            break;

        case 'DEC_QTY':
            if(index > -1){
                //decrease item quantity in the cart
                state.cartItems[index].quantity--;
            }
            break;
        
        case 'CLEAR':
            //removes all the items in the cart
            state.cartItems = [];
            break;

        default:
    }
    return state;
}