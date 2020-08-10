export const initialState = {
    basket: []
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
        return {state};
        case 'REMOVE_FROM_BASKET':
            // login for removing items from basket
        return {state};
        default:
            return state;
    }
} 


export default reducer;