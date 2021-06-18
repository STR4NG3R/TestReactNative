export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "@basket/init":
      console.log(action.payload);
      return action.payload;
    case "@basket/remove":
      return state;
    case "@basket/add":
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
