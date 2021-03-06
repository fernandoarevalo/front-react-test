import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Menu from "components/Menu";

describe("<Menu />", () => {
  afterEach(() => {
    cleanup();
  });

  test("Menu container section", () => {
    const { getByTestId } = render(<Menu />);
    const container = getByTestId("menu-container");
    expect(container).toBeTruthy();
  });

  test("Menu container section", () => {
    const { getByTestId } = render(<Menu />);
    const container = getByTestId("menu-container");
    expect(container).toBeTruthy();
  });

  test("Snapshot Menu component", () => {
    const { asFragment } = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  });
});
