export const initialState={
    Basket:[],
    user:null
}
export const getBasketTotal=(Basket)=>{
   return Basket.reduce((amount,item)=>item.price+amount,0);
}  
const reducer=( state,action )=>{
    switch (action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                Basket:[...state.Basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
            const index=state.Basket.findIndex(
                (basketItem)=>basketItem.id==action.id
            )  
            let newBasket=[...state.Basket];
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(`can't remove product with (id:${action.id})`)
            }
            return{
                ...state,
                Basket:[...newBasket],
                
            }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }    
        default:
            return state;
    }
}

export default reducer;