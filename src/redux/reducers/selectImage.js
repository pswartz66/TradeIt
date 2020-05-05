
export default function selectImages (state = { images: {} }, action) {
    switch (action.type) {
        case "SAVE_IMAGE":
            return {
                ...state,
                images: action.payload
            }
        default: 
            return state;
    }
}