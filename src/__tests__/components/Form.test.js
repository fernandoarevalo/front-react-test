import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Form from "components/Form";

describe("<Form />", () => {
  afterEach(() => {
    cleanup();
  });

  test("Snapshot Form component", () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
