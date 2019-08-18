import React from "react";
import styled from "styled-components";

import IMG from "./output-onlinepngtools.png";

const Nav = styled.div`
  background-color: #dae3f3;
  display: flex;
  justify-content: flex-end;
`;

const NavBar1 = props => (
  <Nav>
    <img src={IMG} alt="nav" />
  </Nav>
);

export default NavBar1;
