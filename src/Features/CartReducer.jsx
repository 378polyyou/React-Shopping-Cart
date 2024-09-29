export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price , 0)
}


const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            const existingProductIndex = state.findIndex(p => p.id === action.product.id);
            if (existingProductIndex >= 0) {
                // Update quantity if it already exists
                const updatedCart = state.map((p, index) => 
                    index === existingProductIndex 
                        ? { ...p, quantity: p.quantity + action.product.quantity } 
                        : p
                );
                return updatedCart;
            }
            return [...state, { ...action.product, quantity: action.product.quantity }];

        case "Remove":
            return state.filter( p => p.id !== action.id)

        case "Increase":
            const IndexI = state.findIndex( p => p.id === action.id)
            state[IndexI].quantity += 1 
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex( p => p.id === action.id)
            state[IndexD].quantity -= 1 
            return [...state]

        case "ApplyCoupon":
            return {
                ...state,discount: 50 // เพิ่มค่า discount ลงใน state
                 };
        default: 
            state;
    }
}

export default CartReducer