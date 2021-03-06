import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import MenuItem from "components/MenuItem";
import AIRLINES from "utils/mockups/Airlines";

describe("<MenuItem />", () => {
  const setAirLine = jest.fn();

  afterEach(() => {
    cleanup();
  });

  test("Calls onClick prop when Menu item clicked", () => {
    render(
      <MenuItem
        key={AIRLINES[0].id}
        airlineObj={AIRLINES[0]}
        setAirLine={setAirLine}
      />
    );
    fireEvent.click(screen.getByRole("tab", { selected: false }));
  });

  test("Snapshot MenuItem component", () => {
    const { asFragment } = render(
      <MenuItem
        key={AIRLINES[0].id}
        airlineObj={AIRLINES[0]}
        setAirLine={setAirLine}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
