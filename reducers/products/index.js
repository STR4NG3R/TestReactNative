export const productReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case "@product/init":
      return state.payload;
    case "@produc/filter-categories":
      const { categorie } = action.payload;
      return state.filter((item) => item.categorie === categorie);
    default:
      return state;
    // throw new Error("This state is not supported");
  }
};

export const initProducts = (products) => {
  return {
    type: "@product/init",
    payload: products,
  };
};

export const filterByCategorie = (categorie) => {
  return {
    type: "@product/filter-categories",
    payload: categorie,
  };
};
