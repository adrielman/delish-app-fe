import React from "react";
import { shallow } from "enzyme";
import { Button } from "./DropdownInput";

describe("DropdownInput", () => {
  const clickHandler = jest.fn();
  const component = shallow(
    <DropdownInput
      label="Unit"
      name="unit"
      value={this.state.unit}
      options={UNITS}
      onChange={clickHandler}
    />
  );

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call handler when clicked", () => {
    component.find("button").simulate("click", { preventDefault: jest.fn() });
    expect(clickHandler).toBeCalledTimes(1);
  });
});
