import React from "react";
import { shallow } from "enzyme";
import Gnomo from "../components/Gnomo";
import Image from "../components/Image";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props) => {
  return shallow(<Gnomo {...props} />);
};

const props = {
  name: "Tobus Quickwhistle",
  image:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  age: 306,
  weight: 39.065952,
  height: 107.75835,
  hairColor: "Pink",
  professions: [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    " Tinker",
    "Tailor",
    "Potter",
  ],
  friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
};

it("Should render product component without errors", () => {
  const component = findByTestAtrr(setUp({ ...props }), "gnomeComponent");
  expect(component.length).toBe(1);
});

it("Should recibe image whith src of image prop", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "gnome-image");
  expect(Component.length).toBe(1);
  expect(Component.prop("src")).toBe(props.image);
});

it("Should recibe h6 component whith name prop", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "product-name");
  expect(Component.text()).toBe(props.name);
});

it("Should recibe p component whith age prop", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "gnome-age");
  expect(Component.text()).toBe(props.age + " years");
});

it("Should recibe p component whith hair color prop", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "gnome-hairColor");
  expect(Component.text()).toBe("Hair color: " + props.hairColor);
});

it("Should recibe div friends whit p of friends", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "gnome-friends");
  expect(Component.find("p").length).toBe(2);
});

it("Should recibe div profession whit p of professions", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "gnome-professions");
  expect(Component.find("p").length).toBe(6);
});

it("Should render Image component", () => {
  const component = findByTestAtrr(setUp({ ...props }), "gnomeComponent");
  expect(component.find(Image).length).toBe(1);
});

it("Should render Image component with display none", () => {
  const component = findByTestAtrr(setUp({ ...props }), "gnomeComponent");
  expect(component.find(Image).prop("style")).toHaveProperty("display", "none");
});
