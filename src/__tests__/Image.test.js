import React from "react";
import { shallow } from "enzyme";
import Image from "../components/Image";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props) => {
  return shallow(<Image {...props} />);
};

const props = {
  style: { display: "none" },
  image:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
};

it("Should render image component without errors", () => {
  const component = findByTestAtrr(setUp({ ...props }), "imageComponent");
  expect(component.length).toBe(1);
});

it("Should render image component with style 'display: none'", () => {
  const component = findByTestAtrr(setUp({ ...props }), "imageComponent");
  expect(component.prop("style")).toHaveProperty("display", "none");
});

it("Should render image element with image props", () => {
  const component = findByTestAtrr(setUp({ ...props }), "image-image");
  expect(component.prop("src")).toBe(props.image);
});
