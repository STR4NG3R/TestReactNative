export const productReducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case "@product/init":

    case "@produc/filter-categories":
      const { categorie } = action.payload;
      return state.filter((item) => item.categorie === categorie);
    default:
      throw new Error("This state is not supported");
  }
};

export const initNotes = (products) => {
  return {
    type: "@product/init",
    payload: products,
  };
};
