import React from "react";
import { shallow } from "enzyme";
import Search from "../components/Search";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props) => {
  return shallow(<Search {...props} />);
};

const props = {
  value: "search",
  setValue: jest.fn(),
};

it("Should render search component without errors", () => {
  const component = findByTestAtrr(setUp({ ...props }), "searchComponent");
  expect(component.length).toBe(1);
});

it("Should render input element and execute prop function on change", () => {
  const component = findByTestAtrr(setUp({ ...props }), "searchInput");
  expect(component.length).toBe(1);
  expect(component.prop("value")).toBe(props.value);
  const mockedEvent = { target: {} };
  component.simulate("change", mockedEvent);
  expect(props.setValue).toHaveBeenCalled();
});
