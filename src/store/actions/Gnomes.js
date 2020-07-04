import axios from "axios";
import * as actionType from "./actionTypes";

export const loadingError = (bool) => ({
  type: actionType.LOADING_ERROR,
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: actionType.LOADING_IN_PROGRESS,
  isLoading: bool,
});

export const setGnomes = (data) => ({
  type: actionType.SET_GNOMES,
  payload: data,
});

export function getGnomes() {
  return async (dispatch) => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    const result = await axios.get(
      `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`
    );
    dispatch(setGnomes({ ...result.data }));
  };
}
