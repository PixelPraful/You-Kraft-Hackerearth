import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_IMAGES_REQUEST,
  PRODUCT_IMAGES_SUCCESS,
  PRODUCT_IMAGES_FAIL,
} from '../constants/productConstants';

export const listProducts = () => {
  return dispatch => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
      .then(res => {
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};

export const listProductImages = () => {
  return dispatch => {
    dispatch({ type: PRODUCT_IMAGES_REQUEST });
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json')
      .then(res => {
        dispatch({ type: PRODUCT_IMAGES_SUCCESS, payload: res.data });
      }).catch(err => {
        dispatch({ type: PRODUCT_IMAGES_FAIL, payload: err.response && err.response.data.message ? err.response.data.message : err.message });
      });
  };
};