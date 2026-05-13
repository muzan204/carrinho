// Estado inicial
const initialState = {
    cart: []
  };
  
  // Reducer
  const cartReducer = (state = initialState, action) => {
  
    switch (action.type) {
  
      // Adicionar item
      case "ADD_ITEM":
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
  
      // Remover item
      case "REMOVE_ITEM":
        return {
          ...state,
          cart: state.cart.filter(
            (item, index) => index !== action.payload
          )
        };
  
      // Caso padrão
      default:
        return state;
    }
  };
  
  export default cartReducer;