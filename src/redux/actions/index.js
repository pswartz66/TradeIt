import { SET_DISTANCE } from '../constants/actionTypes';
import { SET_PRICE_FROM } from '../constants/actionTypes';
import { SET_PRICE_TO } from '../constants/actionTypes';
import { APPLY_FILTER } from '../constants/actionTypes';
import { RESET_OPTIONS } from '../constants/actionTypes';

import { SEARCH_QUERY } from '../constants/actionTypes';
import { SUBMIT_QUERY } from '../constants/actionTypes';
import { REMOVE_QUERY } from '../constants/actionTypes';


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
export const search_Query = (value) => ({
    type: SEARCH_QUERY,
    payload: value
})
export const submit_Query = (value) => ({
    type: SUBMIT_QUERY,
    payload: value
})
export const remove_Query = () => ({
    type: REMOVE_QUERY
})
