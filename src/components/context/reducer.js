export const initialState = {
    basket : [],
}

export const getBasketTotal = (basket) =>{
    let amount = 0;
    basket?.forEach(element => {
        amount += element.price
    });
    return amount;
};

const reducer = (state, action) =>{
    // console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET" : 
        return {
            ...state , 
            basket : [...state.basket, action.item],
        };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(find=> find.id === action.id);
            const newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Cant remove product ${action.id} from the basket!!`)
            }
        return {
            ...state,
            basket: newBasket
        };
        default :
            return state;
    }
};

export default reducer; 