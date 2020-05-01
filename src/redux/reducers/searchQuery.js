
export default function searchQueries (state = { search: '' }, action) {
    switch (action.type) {
        case "SEARCH_QUERY":
            return {
                ...state,
                search: action.payload
            }
        case "SUBMIT_QUERY":
            return {
                ...state,
                search: ''
            }
        case "REMOVE_QUERY":
            return {
                search: ''
            }
        default:
            return state;
    }
};