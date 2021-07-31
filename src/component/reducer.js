// import ItemInBasket from "./ItemInBasket";

export const initialState = {
  basket: [],
};

// SELECTOR
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
  console.log('this a action', action)
  console.log('this a state', state)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (ItemInBasket) => ItemInBasket.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove product`)
      }
      return {
        ...state,
        basket: newBasket
      }
    default:
      return state;
  }
}

export default reducer;