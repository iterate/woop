import styled from "styled-components";

const Button = styled.button`
  padding: 5px 15px;
  border: 1px solid #aaa;
  background-image: linear-gradient(#eee, #ccc);

  :focus {
    transform: rotate(2deg);
    outline: none;
  }
`;

export default Button;
