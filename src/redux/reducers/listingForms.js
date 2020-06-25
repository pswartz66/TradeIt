
export default function listForms (state = { title: '', description: '', price: '', location_post: undefined }, action) {
    switch (action.type) {
        case "SET_TITLE":
            return {
                ...state,
                title: action.payload
            }
        case "SET_DESCRIPTION":
            return {
                ...state,
                description: action.payload
            }
        case "SET_PRICE":
            return {
              ...state,
              price: action.payload
            }
        case "SUBMIT_TRADE": 
            return {
                ...state
            }
        case "SET_LOCATION_POST":
          return {
            ...state,
            location_post: action.payload
          }
        default:
            return state;
    }
}