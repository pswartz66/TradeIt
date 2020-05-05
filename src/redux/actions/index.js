// modal options filter section
import { SET_DISTANCE } from '../constants/actionTypes';
import { SET_PRICE_FROM } from '../constants/actionTypes';
import { SET_PRICE_TO } from '../constants/actionTypes';
import { APPLY_FILTER } from '../constants/actionTypes';
import { RESET_OPTIONS } from '../constants/actionTypes';

// home page search bar query section
import { SEARCH_QUERY } from '../constants/actionTypes';
import { SUBMIT_QUERY } from '../constants/actionTypes';
import { REMOVE_QUERY } from '../constants/actionTypes';

// image selection form
import { SAVE_IMAGE } from '../constants/actionTypes';

// modal options filter section
export const set_Distance = (value) => ({
    type: SET_DISTANCE,
    payload: value
});
export const set_PriceFrom = (value) => ({
    type: SET_PRICE_FROM,
    payload: value
})
export const set_PriceTo = (value) => ({
    type: SET_PRICE_TO,
    payload: value
})
export const apply_Filter = () => ({
    type: APPLY_FILTER
})
export const reset_Options = () => ({
    type: RESET_OPTIONS
})

// home page search bar query section
// updates the state each time a keyboard letter is entered
export const search_Query = (value) => ({
    type: SEARCH_QUERY,
    payload: value
})
// updates state when keyboard return key is pressed
export const submit_Query = () => ({
    type: SUBMIT_QUERY
})
export const remove_Query = () => ({
    type: REMOVE_QUERY
})

// image selection form
export const save_Image = (image) => ({
    type: SAVE_IMAGE,
    payload: image
})