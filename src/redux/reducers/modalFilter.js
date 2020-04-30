

export default function setDistance (state = { distance: 50, priceFrom: '', priceTo: ''}, action) {

    switch(action.type) {
        case "SET_DISTANCE":
            return {
                ...state,
                distance: Math.round(action.payload, 0)
            }
        case "SET_PRICE_FROM":
            return {
                ...state,
                priceFrom: action.payload
            }
        case "SET_PRICE_TO":
            return {
                ...state,
                priceTo: action.payload
            }
        case "APPLY_FILTER":
            // return updated state then set to initial state
            return {
                ...state,
                distance: 50,
                priceFrom: '',
                priceTo: ''
            }
        case "RESET_OPTIONS":
            // reset to initial state
            return {
                distance: 50,
                priceFrom: '',
                priceTo: ''
            }            
        default: 
            return state;
    }
}