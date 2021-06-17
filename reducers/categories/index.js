export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "@categories/init":
      return action.payload;
    default:
      return state;
    // throw new Error("This state is not supported");
  }
};

export const initCategories = (categories) => {
  return {
    type: "@categories/init",
    payload: categories,
  };
};
