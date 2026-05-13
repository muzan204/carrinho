// Ação para adicionar item
export const addItem = (item) => {
    return {
      type: "ADD_ITEM",
      payload: item
    };
  };
  
  // Ação para remover item
  export const removeItem = (index) => {
    return {
      type: "REMOVE_ITEM",
      payload: index
    };
  };