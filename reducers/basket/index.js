export const basketReducer = (
  state = {
    products: [],
  },
  action
) => {
  switch (action.type) {
    case "@basket/init":
      console.log(action.payload);
      return action.payload;
    case "@basket/remove":
      return state;
    case "@basket/add":
      return state;
    case "@basket/changeQuantity":
      const { action, item } = action.payload;
      const finded = state.products.find((product) => product.id === item.id);
      if (finded) {
        state.products[id].quantity += action;
      } else {
        state.products.concat(item);
      }
      return state;
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
    payload: { item, action },
  };
};
