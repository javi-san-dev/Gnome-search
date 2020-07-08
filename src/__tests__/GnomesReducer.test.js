import gnomesReducer from "../store/reducers/Gnomes";
import * as actions from "../store/actions/actionTypes";
import gnomes from "./mock-data.json";

const initialState = {
  hasErrored: false,
  isLoading: false,
  gnomes: [],
};

describe("initial state reducer", () => {
  it("should return the initial state", () => {
    expect(gnomesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOADING_ERROR", () => {
    const startAction = {
      type: actions.LOADING_ERROR,
    };
    expect(gnomesReducer(undefined, startAction)).toEqual(initialState);
  });

  it("should handle LOADING_IN_PROGRESS", () => {
    const successAction = {
      type: actions.LOADING_IN_PROGRESS,
      isLoading: true,
    };
    expect(gnomesReducer({}, successAction)).toEqual({ isLoading: true });
  });

  it("should handle SET_PRODUCTS", () => {
    const successAction = {
      type: actions.SET_GNOMES,
      payload: gnomes,
    };
    expect(gnomesReducer({}, successAction)).toEqual({
      isLoading: false,
      gnomes: gnomes,
    });
  });
});
