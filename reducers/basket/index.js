export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "@basket/init":
      console.log(action.payload);
      return action.payload;
    case "@basket/remove":
      const { categorie } = action.payload;
      return state.filter((item) => item.categorie === categorie);
    case "@basket/add":
      const { categorie } = action.payload;
      return state.filter((item) => item.categorie === categorie);
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
