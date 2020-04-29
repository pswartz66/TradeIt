
// const INITIAL_STATE = false;

export default function isModalOpen(state = { isOpen: false }, action) {
    switch (action.type) {
        case "MODAL_OPENED":
            return {
                ...state,
                // isOpen: action.payload
                isOpen: true
            }
        case "MODAL_CLOSED":
            return {
                ...state,
                // isOpen: action.payload
                isOpen: false
            }
        default:
            // console.log(state);
            return state;
    }
}