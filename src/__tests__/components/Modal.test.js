import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Modal from "components/Modal";

describe("<Modal />", () => {
  afterEach(() => {
    cleanup();
  });

  test("Snapshot Modal component", () => {
    const { asFragment } = render(<Modal />);
    expect(asFragment()).toMatchSnapshot();
  });
});
