import React from "react";
import { shallow } from "enzyme";
import { Navigation, Link } from "./Navigation";

describe("Navigation", () => {
  const navigation = shallow(
    <Navigation>
      <Link to="/" exact>
        Home
      </Link>
      <Link to="/link1">Link1</Link>
      <Link to="/link2">Link2</Link>
    </Navigation>
  );

  it("should match snapshot", () => {
    expect(navigation).toMatchSnapshot();
  });

  it("link should match snapshot", () => {
    const link = shallow(<Link to="/link1">Link1</Link>);
    expect(link).toMatchSnapshot();
  });
});
