import React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
  const clickHandler = jest.fn();
  const component = shallow(<Button onClick={clickHandler} />);

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should match snapshot when compact", () => {
    const compactButton = shallow(<Button onClick={clickHandler} compact />);
    expect(compactButton).toMatchSnapshot();
  });

  it("should call handler when clicked", () => {
    component.find("button").simulate("click", { preventDefault: jest.fn() });
    expect(clickHandler).toBeCalledTimes(1);
  });
});
