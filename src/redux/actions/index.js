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
import { REMOVE_IMAGE } from '../constants/actionTypes';

// listing menu forms
import { SET_TITLE } from '../constants/actionTypes';
import { SET_DESCRIPTION } from '../constants/actionTypes';
import { SET_PRICE } from '../constants/actionTypes';
import { SUBMIT_TRADE } from '../constants/actionTypes';

// mongodb Stitch config
import { SET_CLIENT } from '../constants/actionTypes';
import { SET_MONGO } from '../constants/actionTypes';
import { SET_DB } from '../constants/actionTypes';
import { SET_APP } from '../constants/actionTypes';

// set users location ONLY when trade is submitted
import { SET_LOCATION_POST } from '../constants/actionTypes';

// HomeBody component mongo queries
import { GET_INITIAL_GOODS } from '../constants/actionTypes';


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
// removes image from pane
export const remove_Image = (image) => ({
    type: REMOVE_IMAGE,
    payload: image
})

// listing menu forms section
export const set_Title = (value) => ({
    type: SET_TITLE,
    payload: value
})
export const set_Description = (value) => ({
    type: SET_DESCRIPTION,
    payload: value
})
export const set_Price = (value) => ({
  type: SET_PRICE,
  payload: value
})
export const submit_Trade = () => ({
    type: SUBMIT_TRADE
})

// mongodb Stitch config
export const set_Client = (value) => ({
  type: SET_CLIENT,
  payload: value
})
export const set_Mongo = (value) => ({
  type: SET_MONGO,
  payload: value
})
export const set_Db = (value) => ({
  type: SET_DB,
  payload: value
})
export const set_App = (value) => ({
  type: SET_APP,
  payload: value
})

// set users location ONLY when trade is submitted
export const set_Location_Post = (value) => ({
  type: SET_LOCATION_POST,
  payload: value
})

// HomeBody component mongo queries
export const get_Initial_Goods = (value) => ({
  type: GET_INITIAL_GOODS,
  payload: value
})