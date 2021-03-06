import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "components/MenuItem";
// Utils
import AIRLINES from "utils/mockups/Airlines";
import { MENU } from "utils/constants/Contants";

const MenuContainer = styled.ul`
  display: flex;
  text-align: center;
  margin-top: 0;

  li {
    flex: 1 1 auto;
  }

  li:active {
    background-color: initial;
  }

  @media screen and (max-width: 920px) {
    display: block;
  }
`;

export default function Menu() {
  const [airLine, setAirLine] = useState(AIRLINES[0]);

  return (
    <React.Fragment key="menu">
      <MenuContainer className="card collection" data-testid="menu-container">
        {AIRLINES.map((airlineObj) => {
          return (
            <MenuItem
              key={airlineObj.id}
              airlineObj={airlineObj}
              selected={airLine === airlineObj}
              setAirLine={setAirLine}
            />
          );
        })}
      </MenuContainer>
      <section className="container">
        <div className="row">
          <div className="col s12">
            <h4>{`${MENU.TITLE} ${airLine?.name}`}</h4>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
