
export default function listForms (state = { title: '', whatFor: '', description: '' }, action) {
    switch (action.type) {
        case "SET_TITLE":
            return {
                ...state,
                title: action.payload
            }
        case "SET_WHATFOR":
            return {
                ...state,
                whatFor: action.payload
            }
        case "SET_DESCRIPTION":
            return {
                ...state,
                description: action.payload
            }
        case "SUBMIT_TRADE": 
            return {
                ...state
            }
        default:
            return state;
    }
}