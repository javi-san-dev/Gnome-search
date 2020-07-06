import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { getGnomes } from "../store/actions/Gnomes";
import Gnomes from "./mock-data.json";
import {
  loadingError,
  loadingInProgress,
  setGnomes,
} from "../store/actions/Gnomes";
import * as actions from "../store/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Actions", () => {
  test("loadingInProgress", () => {
    const mockLoading = true;
    const action = loadingInProgress(mockLoading);
    expect(action.type).toBe("LOADING_IN_PROGRESS");
    expect(action.isLoading).toBe(mockLoading);
  });

  test("loadingError", () => {
    const mockError = true;
    const action = loadingError(mockError);
    expect(action.type).toBe("LOADING_ERROR");
    expect(action.hasErrored).toBe(mockError);
  });

  test("setGnomes", () => {
    const mockGnomes = Gnomes;
    const action = setGnomes(mockGnomes);
    expect(action.type).toBe("SET_GNOMES");
    expect(action.payload).toBe(mockGnomes);
  });
});

describe("Test thunk action creator", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it("expected actions should be dispatched on successful request", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: Gnomes,
      });
    });

    const expectedActions = [
      { type: actions.LOADING_ERROR, hasErrored: false },
      { type: actions.LOADING_IN_PROGRESS, isLoading: true },
      { type: actions.SET_GNOMES, payload: { ...Gnomes } },
    ];
    const store = mockStore({ gnomes: Gnomes });
    return store.dispatch(getGnomes()).then(() => {
      const newState = store.getState();
      expect(newState.gnomes).toBe(Gnomes);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
