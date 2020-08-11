export const initialState = {
    basket: [{
        id:'23453241',
        title: 'Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal',
        price: 49.99,
        rating:4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61qDKbBlcgL._AC_SL1000_.jpg'
    }],
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            newBasket.splice(index, 1);
            if ( index >= 0) {
            }
            else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in the basket.`
                )}
        return {...state, basket: newBasket};
        default:
            return state;
    }
} 


export default reducer;