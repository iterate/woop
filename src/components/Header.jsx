import React from "react";
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

const Header = () => {
  return (
    <HeaderContainer>
      <Title />
      <a href="/logout">
        <Button>Logg ut</Button>
      </a>
    </HeaderContainer>
  );
};

export default Header;
