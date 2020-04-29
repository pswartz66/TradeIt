// import { SET_OPTIONS } from '../constants/actionTypes';
import { MODAL_OPENED } from '../constants/actionTypes';

// export const applyFilter = (options) => ({
//     type: SET_OPTIONS,
//     payload: options
// });

export const modalOpen = myBool => ({
    type: MODAL_OPENED,
    myBool
});