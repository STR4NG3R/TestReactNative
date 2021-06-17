export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "@categorie/init":
      return state.payload;
    default:
      return state;
    // throw new Error("This state is not supported");
  }
};

export const initCategories = (categories) => {
  return {
    type: "@categorie/init",
    payload: categories,
  };
};
