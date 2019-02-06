import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Title from "./Title";

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

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="https://www.iterate.no/favicon.a7c7b321.png" alt="Logo" />
      <Title />
      <Button>Logg ut</Button>
    </HeaderContainer>
  );
};

export default Header;
