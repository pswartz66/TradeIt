
export default function homeQueries(state = { initial_Goods: [] }, action) {
  switch (action.type) {
    case "GET_INITIAL_GOODS":
      return {
        ...state,
        initial_Goods: action.payload
      }
      default:
        return state;
  }
}