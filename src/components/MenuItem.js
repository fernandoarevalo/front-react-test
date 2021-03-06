import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuButton = styled.button`
  border: none;
  width: 100%;

  &,
  :focus {
    background-color: transparent;
  }
`;

export default function MenuItem({ airlineObj, selected, setAirLine }) {
  return (
    <li
      role="tab"
      aria-selected={selected}
      className={`collection-item ${selected ? "active" : ""}`}
    >
      <MenuButton
        type="button"
        onClick={() => {
          setAirLine(airlineObj);
        }}
      >
        {airlineObj.name}
      </MenuButton>
    </li>
  );
}

/**
 * Option proptypes
 */
const Option = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
});

/**
 * PropsTypes
 */
MenuItem.propTypes = {
  airlineObj: Option,
  selected: PropTypes.bool,
  setAirLine: PropTypes.func,
};

/**
 * Default props
 */
MenuItem.defaultProps = {
  airlineObj: {},
  selected: false,
  setAirLine: null,
};
