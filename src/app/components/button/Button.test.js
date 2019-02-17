import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  it("should indeed render correctly", () => {
    const component = shallow(
      <Button
        onClick={() => {
          console.log("I work!");
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
