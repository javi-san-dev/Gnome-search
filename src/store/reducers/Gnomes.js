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

const gnomesReducer = (state = initialState, action) => {
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
        gnomes: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default gnomesReducer;
