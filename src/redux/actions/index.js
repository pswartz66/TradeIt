import { SET_DISTANCE } from '../constants/actionTypes';
import { SET_PRICE_FROM } from '../constants/actionTypes';
import { SET_PRICE_TO } from '../constants/actionTypes';
import { APPLY_FILTER } from '../constants/actionTypes';
import { RESET_OPTIONS } from '../constants/actionTypes';


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