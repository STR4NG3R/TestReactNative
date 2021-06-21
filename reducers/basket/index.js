
export const basketReducer = (
  state = {
    products: [],
  },
  action
) => {
  switch (action.type) {
    case "@basket/init":
      return action.payload;
    case "@basket/remove":{
      const {item} = action.payload
      const {[item.id]: value, ...newState } = state.products
      return {...state, products: newState}
    }
    case "@basket/add":
      return state;
    case "@basket/changeQuantity": 
      const { direction , item } = action.payload;
      const finded = state.products[item.id]
      if (finded) {
        if (finded.quantity <= 0 && direction === -1) return state
        const quantity = finded.quantity += direction
        return {
          ...state,
          products: {...state.products, [item.id]: {...item, quantity}}
        }
      } else {
        return {
          ...state, 
          products: {...state.products, [item.id]: {...item, quantity: 1}}
        }

      }
    default:
      return state;
  }
};

export const initProducts = (baskets) => {
  return {
    type: "@basket/init",
    payload: baskets,
  };
};

export const filterByCategorie = (categorie) => {
  return {
    type: "@basket/filter-categories",
    payload: categorie,
  };
};

export const changeQuantity = (item, action) => {
  return {
    type: "@basket/changeQuantity",
    payload: { item, direction: action },
  };
};


export const checkExists = (item) => {
  return {
    type: "@bakset/exist",
    payload: { item }
  }
}
export const deleteItem = (item) => {
  return {
    type: "@basket/remove",
    payload: {item}
  }
}
