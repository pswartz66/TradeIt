
export default function dbSet(state = { client: undefined, mongo: undefined, db: undefined, app: undefined }, action) {
  switch (action.type) {
    case "SET_CLIENT":
      return {
        ...state,
        client: action.payload
      }
    case "SET_MONGO":
      return {
        ...state,
        mongo: action.payload
      }
    case "SET_DB":
      return {
        ...state,
        db: action.payload
      }
    case "SET_APP":
      return {
        ...state,
        app: action.payload
      }
    default:
      return state;
  }
}