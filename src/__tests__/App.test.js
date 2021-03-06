import React from "react";
import { render } from "@testing-library/react";
import App from "App";

describe("<App />", () => {
  test("Snapshot app component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
