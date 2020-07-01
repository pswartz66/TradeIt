
export default function homeQueries(state = { initial_Goods: [] }, action) {
  switch (action.type) {
    case "SAVE_INITIAL_GOODS":
      return {
        initial_Goods: action.payload
      }
      default:
        return state;
  }
}