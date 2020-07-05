import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "../App";
import Gnomo from "../components/Gnomo";
import Search from "../components/Search";
import mockData from "./mock-data.json";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const mockStore = configureMockStore([thunk]);

const store = (gnomes, isLoading) => {
  const gnome = gnomes || false;
  const isLoadin = isLoading || false;
  return mockStore({
    gnomes: { gnomes: gnome, isLoading: isLoadin },
    dispatch: jest.fn(),
  });
};

const wrapper = mount(
  <Provider store={store()}>
    <App />
  </Provider>
);

it("Should render App component without errors", () => {
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.length).toBe(1);
});

it("Should render Search component without errors", () => {
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.find(Search).length).toBe(1);
});

it("Should render Spinner component", () => {
  const wrapper = mount(
    <Provider store={store(null, true)}>
      <App />
    </Provider>
  );
  const component = findByTestAtrr(wrapper, "spinnerComponent");
  expect(component.length).toBe(1);
});

it("Should NOT render spinner component", () => {
  const component = findByTestAtrr(wrapper, "spinnerComponent");
  expect(component.length).toBe(0);
});

it("Should render 50 gnomes components", () => {
  const data = mockData;
  for (let i = 0; i < 55; i++) {
    const g = data.Brastlewark[0];
    g.id = i;
    data.Brastlewark.push({ ...g });
  }

  const wrapper = mount(
    <Provider store={store(data, false)}>
      <App />
    </Provider>
  );
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.find(Gnomo).length).toBe(50);
});

it("Should render NO products", () => {
  const wrapper = mount(
    <Provider store={store(null, false)}>
      <App />
    </Provider>
  );
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.find(Gnomo).length).toBe(0);
});
