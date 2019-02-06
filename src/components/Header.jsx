import React from "react";
import styled from "styled-components";

import Button from "@/components/Button";

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  height: 30px;
  padding: 4px 0;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo src="https://www.iterate.no/favicon.a7c7b321.png" alt="Logo" />
    <Button>Logg ut</Button>
  </HeaderContainer>
);

export default Header;
