export const userReducer = (state = [], action) => {
  switch (action.type) {
    case "@user/login":
      console.log(action.payload);
      return action.payload;
    case "@user/logout":
      return state;
    default:
      return state;
  }
};

export const initProducts = (users) => {
  return {
    type: "@user/init",
    payload: users,
  };
};

export const filterByCategorie = (categorie) => {
  return {
    type: "@user/filter-categories",
    payload: categorie,
  };
};
