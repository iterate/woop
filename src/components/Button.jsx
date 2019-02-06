import styled from "styled-components";

const Button = styled.button`
  padding: 5px 15px;
  border: 1px solid #aaa;
  background-image: linear-gradient(#eee, #ccc);

  :focus {
    outline: none;
    transform: rotate(0.5deg);

    @media (max-width: 1000px) {
      transform: rotate(1deg);
    }

    @media (max-width: 600px) {
      transform: rotate(2deg);
    }
  }
`;

export default Button;
