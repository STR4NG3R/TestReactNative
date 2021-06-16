export const productReducer = (state = [], action) => {
  console.log(state, action)
  switch (action.type) {
    case '@categories/filter':
      const { categorie } = action.payload
      return state.filter(item => item.categorie === categorie)
    default: throw (new Error("This state is not supported"))
  }
}

