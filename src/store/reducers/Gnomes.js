import {
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  SET_GNOMES,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  hasErrored: false,
  gnomes: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return {
        ...state,
      };
    case LOADING_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_GNOMES:
      return {
        ...state,
        gnomes: 0,
      };
    default:
      return state;
  }
};

export default productReducer;