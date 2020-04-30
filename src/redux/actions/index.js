import { SET_DISTANCE } from '../constants/actionTypes';
import { SET_PRICE_FROM } from '../constants/actionTypes';
import { SET_PRICE_TO } from '../constants/actionTypes';
import { APPLY_FILTER } from '../constants/actionTypes';
import { RESET_OPTIONS } from '../constants/actionTypes';


export const setDistance = () => ({
    type: SET_DISTANCE
})
export const setPriceFrom = () => ({
    type: SET_PRICE_FROM
})
export const setPriceTo = () => ({
    type: SET_PRICE_TO
})
export const applyFilter = () => ({
    type: APPLY_FILTER
})
export const resetOptions = () => ({
    type: RESET_OPTIONS
})